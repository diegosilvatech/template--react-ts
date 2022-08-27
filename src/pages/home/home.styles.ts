import { styled } from 'styles/stitches.config';

export const Wrapper = styled('main', {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$colorBackground'
});

export const Title = styled('h1', {
  fontSize: '$textDefault',
  color: '$colorTextContrastHigh',
  fontWeight: '$regular',

  strong: {
    color: '$colorHighlight'
  }
});
