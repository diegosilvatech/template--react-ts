export const parameters = {
  actions: {
    argTypesRegex: '^on[A-Z].*'
  },
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'background',
        value: '#161618'
      },
      {
        name: 'hightlight',
        value: '#68ddfd'
      },
      {
        name: 'white',
        value: '#ffffff'
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