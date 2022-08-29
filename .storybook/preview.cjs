import { tokens, globalStyles } from '../src/styles';

globalStyles();

export const parameters = {
  actions: {
    argTypesRegex: '^on[A-Z].*'
  },
  backgrounds: {
    default: '$base-white',
    values: [
      {
        name: '$base-black',
        value: tokens.color.base['base-black']
      },
      {
        name: '$base-white',
        value: tokens.color.base['base-white']
      },
      {
        name: '$brand-primary-09',
        value: tokens.color.brand['brand-primary-09']
      },
      {
        name: '$brand-secondary-09',
        value: tokens.color.brand['brand-secondary-09']
      },
      {
        name: '$highlight-09',
        value: tokens.color.hightlight['highlight-09']
      },
    ]
  },
  controls: {
    a11y: { disable: true },
    expanded: true,
    hideNoControlsWarning: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  options: {
    storySort: {
      method: 'alphabetical'
    }
  }
};
