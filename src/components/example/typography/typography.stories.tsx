import { Story, Meta } from '@storybook/react/types-6-0';

import { Typography, TypographyProps } from './Typography';

export default {
  title: 'Examples/Typography',
  component: Typography,
  args: {
    children: 'typography',
    element: 'p',
    variant: 'body',
    weight: 'font-weight-400',
    size: 'font-size-body-md',
    lineHeight: 'line-height-100'
  },
  argTypes: {
    children: {
      description: 'Text content'
    }
  },
  parameters: {}
} as Meta;

export const TypographyExample: Story<TypographyProps> = args => {
  const { children } = args;
  return <Typography {...args}>{children}</Typography>;
};
