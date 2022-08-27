import { styled } from 'styles/stitches.config';

export const ButtonWrapper = styled('button', {
  variants: {
    variant: {
      primary: {},
      secondary: {}
    },
    isFullWidth: {
      true: {}
    }
  }
});
