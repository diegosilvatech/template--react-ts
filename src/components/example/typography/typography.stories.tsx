import { Story, Meta } from '@storybook/react/types-6-0';

import { Typography, TypographyProps } from './Typography';

export default {
  title: 'Examples/Typography',
  component: Typography,
  args: {
    children: 'typography'
  },
  argTypes: {
    children: {
      description: 'text content'
    }
  },
  parameters: {}
} as Meta;

export const ButtonExample: Story<TypographyProps> = args => {
  const { children } = args;
  return <Typography {...args}>{children}</Typography>;
};
