import { tokens } from '../src/styles'

export const parameters = {
  actions: {
    argTypesRegex: '^on[A-Z].*'
  },
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'background',
        value: tokens.color.base.colorBackground
      },
      {
        name: 'hightlight',
        value: tokens.color.base.sky9
      },
      {
        name: 'white',
        value: tokens.color.base.white
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