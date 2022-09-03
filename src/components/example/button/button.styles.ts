import { styled } from 'styles/stitches.config';

export const ButtonWrapper = styled('button', {
  padding: '$spacing-sm $spacing-md',
  fontFamily: '$font-family-epilogue',
  fontSize: '$font-size-body-md',
  border: '1px solid',
  fontWeight: '$font-weight-300',
  transition: '$transition-default',
  '&:hover': {
    cursor: 'pointer'
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: '$color-brand-primary-300',
        color: '$color-base-white-500',
        borderColor: '$color-brand-primary-300',
        '&:hover': {
          backgroundColor: '$color-brand-primary-400',
          borderColor: '$color-brand-primary-400'
        }
      },
      secondary: {
        backgroundColor: '$color-brand-secondary-300',
        color: '$color-base-white-500',
        borderColor: '$color-brand-secondary-300',
        '&:hover': {
          backgroundColor: '$color-brand-secondary-400',
          borderColor: '$color-brand-secondary-400'
        }
      }
    },
    isFullWidth: {
      true: {
        width: '100%'
      }
    }
  }
});
