import { styled } from 'styles/stitches.config';

export const ButtonWrapper = styled('button', {
  padding: '$spacing-sm $spacing-md',
  fontFamily: '$font-family-epilogue',
  fontSize: '$font-size-14',
  border: '1px solid',
  fontWeight: '$font-weight-400',
  '&:hover': {
    cursor: 'pointer'
  },
  transition: '$transition-default',
  variants: {
    variant: {
      primary: {
        backgroundColor: '$brand-primary-09',
        color: '$base-white',
        borderColor: '$brand-primary-09',
        '&:hover': {
          backgroundColor: '$brand-primary-10',
          borderColor: '$brand-primary-10'
        }
      },
      secondary: {
        backgroundColor: '$brand-secondary-09',
        color: '$brand-secondary-12',
        borderColor: '$brand-secondary-09',
        '&:hover': {
          backgroundColor: '$brand-secondary-10',
          borderColor: '$brand-secondary-10'
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
