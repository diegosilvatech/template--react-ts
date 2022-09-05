import { tokens } from 'styles';

export type FontElementsTypes =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'b'
  | 'strong'
  | 'i'
  | 'em'
  | 'mark'
  | 'small'
  | 'del'
  | 'ins'
  | 'sub'
  | 'sup';
export type FontVariantTypes = 'body' | 'heading';
export type FontWeightTypes = keyof typeof tokens.font.weight;
export type FontSizeTypes = keyof typeof tokens.font.size;
export type FontLineHeightTypes = keyof typeof tokens.font.lineHeight;
