import { defineStyleConfig } from '@chakra-ui/react'

export const Button = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    fontWeight: 'normal',
    textTransform: 'uppercase',
    borderRadius: '50px',
  },
  sizes: {
    sm: {
      fontSize: '10px',
      px: 5, // <-- px is short for paddingLeft and paddingRight
      py: 5, // <-- py is short for paddingTop and paddingBottom
      minW: 160
    },
    md: {
      fontSize: 'md',
      px: 6,
      py: 4,
    },
  },
  variants: {
    solid: {
      color: '#AFAFAF',
      letterSpacing: '6px',
      bg: '#fffffff',
      _hover: {
        border: '1px solid #FC435933',
        borderRadius: 50,
        bg: '#fffffff',
        outline: 'none',
        boxShadow: '0 7px 11px -1px #FC435933'
      },
      _focus: {
        outline: 'none'
      }
    },
    filled: {
      bg: '#FF4359',
      borderRadius: 5,
      color: 'white',
      w: '90%',
      letterSpacing: '6px',
      _focus: {
        outline: 'none'
      }
    }
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'solid',
  },
})