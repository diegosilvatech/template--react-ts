import {
  FontElementsTypes,
  FontVariantTypes,
  FontWeightTypes,
  FontSizeTypes,
  FontLineHeightTypes
} from './typography.types';

import * as s from './typography.styles';

export type TypographyProps = {
  children: string | number;
  variant?: FontVariantTypes;
  element?: FontElementsTypes;
  weight?: FontWeightTypes;
  size?: FontSizeTypes;
  lineHeight?: FontLineHeightTypes;
};

const Typography = ({
  children,
  variant = 'body',
  element = 'p',
  weight = 'font-weight-400',
  size = 'font-size-body-md',
  lineHeight = 'line-height-100'
}: TypographyProps) => (
  <s.TypographyWrapper
    variant={variant}
    as={element}
    css={{
      fontWeight: `$${weight}`,
      fontSize: `$${size}`,
      lineHeight: `$${lineHeight}`
    }}
  >
    {children}
  </s.TypographyWrapper>
);

export { Typography };
