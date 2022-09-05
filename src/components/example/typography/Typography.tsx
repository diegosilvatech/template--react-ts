import * as s from './typography.styles';

export type TypographyProps = {
  children: string | number;
};

const Typography = ({ children }: TypographyProps) => (
  <s.TypographyWrapper>{children}</s.TypographyWrapper>
);

export { Typography };
