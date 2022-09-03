import { styled } from 'styles/stitches.config';

export const Wrapper = styled('main', {
  backgroundColor: '$color-neutral-black-500',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

export const Title = styled('h1', {
  fontSize: '$font-size-body-md',
  lineHeight: '$line-height-120',
  color: '$color-text-contrast-low',
  fontWeight: '$font-weight-500',
  letterSpacing: '$letter-spacing-heading',

  strong: {
    color: '$color-highlight-secondary-300'
  }
});
