import { Story, Meta } from '@storybook/react/types-6-0';

import { Typography, TypographyProps } from './Typography';

export default {
  title: 'Examples/Typography',
  component: Typography,
  args: {
    children: 'Typography component',
    element: 'p',
    variant: 'body',
    weight: 'font-weight-400',
    size: 'font-size-body-md',
    lineHeight: 'line-height-100'
  },
  argTypes: {
    children: {
      description: 'Text content'
    },
    element: {
      description: 'HTML element'
    },
    variant: {
      description: 'Text style'
    },
    weight: {
      description: 'Text weight'
    },
    size: {
      description: 'Text height'
    },
    lineHeight: {
      description: 'Text line height'
    }
  },
  parameters: {}
} as Meta;

export const TypographyExample: Story<TypographyProps> = args => {
  const { children } = args;
  return <Typography {...args}>{children}</Typography>;
};
