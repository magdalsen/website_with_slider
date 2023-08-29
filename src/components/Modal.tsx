import { modalAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
  dialog: {
    borderRadius: '40',
    h: '600',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#AFAFAF',
    padding: '105px'
  }
})

export const Modal = defineMultiStyleConfig({
  baseStyle,
})