import { styled, ConfigProps } from 'styles/stitches.config';

const heading: ConfigProps = {
  fontFamily: '$font-family-heading',
  color: 'red',
  letterSpacing: '$letter-spacing-heading'
};

const body: ConfigProps = {
  fontFamily: '$font-family-body',
  color: 'blue'
};

export const TypographyWrapper = styled('p', {
  variants: {
    variant: {
      heading: { ...heading },
      body: { ...body }
    }
  }
});
