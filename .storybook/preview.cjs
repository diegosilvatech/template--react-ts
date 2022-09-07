import { tokens, globalStyles } from '../src/styles';

globalStyles();

export const parameters = {
  actions: {
    argTypesRegex: '^on[A-Z].*'
  },
  backgrounds: {
    default: '$neutral-white-500',
    values: [
      {
        name: '$base-white-500',
        value: tokens.color.base['base-white-500']
      },
      {
        name: '$neutral-white-500',
        value: tokens.color.neutral['neutral-white-500']
      },
      {
        name: '$neutral-black-500',
        value: tokens.color.neutral['neutral-black-500']
      },
      {
        name: '$brand-primary-300',
        value: tokens.color.brand['brand-primary-300']
      },
      {
        name: '$brand-secondary-300',
        value: tokens.color.brand['brand-secondary-300']
      },
      {
        name: '$base-black-500',
        value: tokens.color.base['base-black-500']
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
