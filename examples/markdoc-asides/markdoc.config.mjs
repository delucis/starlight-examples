import { defineMarkdocConfig, component } from '@astrojs/markdoc/config';

export default defineMarkdocConfig({
  tags: {
    aside: {
      render: component('@astrojs/starlight/components', 'Aside'),
      attributes: {
        type: {
          type: String,
          default: 'note',
          matches: ['note', 'tip', 'caution', 'danger'],
        },
        title: {
          type: String,
          required: false,
        },
      },
    },
  },
});
