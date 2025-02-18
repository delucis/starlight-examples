// @ts-check
import child_process from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { parseArgs } from 'node:util';
import ora from 'ora';
import { dim, red } from 'yoctocolors';

const args = parseArgs({
	options: {
		skip: { type: 'string', multiple: true, short: 's' },
		filter: { type: 'string', multiple: true, short: 'f' },
	},
});
const { skip = [], filter } = args.values;

/** Directories containing example projects. */
const exampleDirs = fs
	.readdirSync('./examples', { withFileTypes: true })
	.filter((entry) => entry.isDirectory())
	.map((entry) => entry.name);

/**
 * Examples that failed to build.
 * @type {string[]}
 */
const failures = [];
/**
 * Examples that were skipped.
 * @type {string[]}
 */
const skips = [];
/**
 * Examples that were successfully built.
 * @type {string[]}
 */
const successes = [];

/** Build each example. */
for (const dir of exampleDirs) {
	try {
		const spinner = ora(dir).start();

		if (skip.includes(dir) || (filter && !filter.includes(dir))) {
			spinner.stopAndPersist({ symbol: '-', suffixText: dim('skipped') });
			skips.push(dir);
			continue;
		}

		const cwd = path.join('./examples', dir);

		// The examples contain a `package-lock.json` but we want to use PNPM for tests, so we import
		// and convert that to a `pnpm-lock.yaml`.
		spinner.suffixText = dim(`pnpm import`);
		await promiseSpawn('pnpm', ['import'], {
			cwd,
			onError: () => {
				spinner.fail(`${dir}: failed to import lock file`);
			},
		});

		// Install the example dependencies using PNPM.
		spinner.suffixText = dim(`pnpm i`);
		await promiseSpawn('pnpm', ['i'], {
			cwd,
			onError: () => {
				spinner.fail(`${dir}: failed to install dependencies`);
			},
		});

		// Build the example with Astro.
		spinner.suffixText = dim(`pnpm build`);
		await promiseSpawn('pnpm', ['build'], {
			cwd,
			onError: () => {
				spinner.fail(`${dir}: failed to build project`);
			},
		});

		spinner.suffixText = '';
		spinner.succeed();
		successes.push(dir);
	} catch {
		failures.push(dir);
	}
}

console.log(
	'\n\n' +
		` Passed: ${successes.length}\n` +
		`Skipped: ${skips.length}\n` +
		` Failed: ${failures.length > 0 ? red(String(failures.length)) : '0'}\n` +
		'\n'
);

if (failures.length > 0) {
	process.exit(1);
}

/**
 * @param {string} command
 * @param {string[]} args
 * @param {{ cwd: string | URL, onError: (err: Error) => void }} opts
 */
function promiseSpawn(command, args, { cwd, onError }) {
	return new Promise((resolve, reject) => {
		const childProcess = child_process.spawn(command, args, { cwd });

		/** @type Buffer[] */
		const chunks = [];
		childProcess.stderr.on('data', (chunk) => {
			chunks.push(chunk);
		});
		const logErrors = () => {
			console.error(...chunks.map((buf) => buf.toString('utf-8')));
		};

		childProcess.on('close', (code) => {
			if (code === 0) {
				resolve(0);
			} else {
				const error = new Error(`Command exited with code ${code}`);
				onError(error);
				logErrors();
				reject(error);
			}
		});
		childProcess.on('error', (error) => {
			onError(error);
			logErrors();
			reject(error);
		});
	});
}
