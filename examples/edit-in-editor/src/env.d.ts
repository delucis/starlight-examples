/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module 'virtual:starlight/project-context' {
  const ProjectContext: { srcDir: string };
  export default ProjectContext;
}
