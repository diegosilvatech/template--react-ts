import { styled } from 'styles/stitches.config';

export const Wrapper = styled('main', {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$base-black'
});

export const Title = styled('h1', {
  fontSize: '$font-size-16',
  lineHeight: '$line-height-120',
  color: '$text-contrast-high',
  fontWeight: '$font-weight-500',
  letterSpacing: '$letter-spacing-heading',

  strong: {
    color: '$brand-secondary-11'
  }
});
