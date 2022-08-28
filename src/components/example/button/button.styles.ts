import { styled } from 'styles/stitches.config';

export const ButtonWrapper = styled('button', {
  padding: '$1 $4',
  fontFamily: '$inter',
  fontSize: '$textSmall',
  border: '1px solid',
  fontWeight: '$regular',
  '&:hover': {
    cursor: 'pointer'
  },
  transition: '$default',
  variants: {
    variant: {
      primary: {
        backgroundColor: '$sky9',
        color: '$black',
        borderColor: '$sky9',
        '&:hover': {
          backgroundColor: '$sky10',
          borderColor: '$sky10'
        }
      },
      secondary: {
        backgroundColor: '$sky3',
        color: '$sky9',
        borderColor: '$sky3',
        '&:hover': {
          backgroundColor: '$sky4',
          borderColor: '$sky4'
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
