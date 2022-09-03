import { tokens, globalStyles } from '../src/styles';

globalStyles();

export const parameters = {
  actions: {
    argTypesRegex: '^on[A-Z].*'
  },
  backgrounds: {
    default: '$color-neutral-white-500',
    values: [
      {
        name: '$color-base-white-500',
        value: tokens.color.base['color-base-white-500']
      },
      {
        name: '$color-neutral-white-500',
        value: tokens.color.neutral['color-neutral-white-500']
      },
      {
        name: '$color-neutral-black-500',
        value: tokens.color.neutral['color-neutral-black-500']
      },
      {
        name: '$color-brand-primary-300',
        value: tokens.color.brand['color-brand-primary-300']
      },
      {
        name: '$color-brand-secondary-300',
        value: tokens.color.brand['color-brand-secondary-300']
      },
      {
        name: '$color-base-black-500',
        value: tokens.color.base['color-base-black-500']
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
