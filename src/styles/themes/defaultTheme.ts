import {
  border,
  color,
  font,
  media,
  size,
  spacing,
  transition,
  util,
  zIndex
} from 'styles/tokens';

export const defaultTheme = {
  theme: {
    borderStyles: { ...border.styles },
    borderWidths: { ...border.widths },
    colors: { ...color.base },
    fonts: { ...font.family },
    fontSizes: { ...font.size },
    fontWeights: { ...font.weight },
    letterSpacings: { ...font.letterSpacing },
    lineHeights: { ...font.lineHeight },
    radii: { ...border.radius },
    shadows: {},
    sizes: { ...size },
    space: { ...spacing },
    transitions: { ...transition },
    zIndices: { ...zIndex }
  },
  utils: { ...util },
  media: { ...media }
};
