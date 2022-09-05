import { styled, ConfigProps } from 'styles/stitches.config';

const heading: ConfigProps = {
  fontFamily: '$font-family-heading',
  letterSpacing: '$letter-spacing-heading'
};

const body: ConfigProps = {
  fontFamily: '$font-family-body'
};

export const TypographyWrapper = styled('p', {
  variants: {
    variant: {
      heading: { ...heading },
      body: { ...body }
    }
  }
});
