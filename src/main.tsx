import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { ChakraProvider } from '@chakra-ui/react'

import { extendTheme } from '@chakra-ui/react'
import { Button } from './components/Button.tsx'
import { Fonts } from './components/Fonts.tsx'
import { Modal } from './components/Modal.tsx'
import { Checkbox } from './components/Checkbox.tsx'

const customComponents = extendTheme({
  components: {
    Button,
    Modal,
    Checkbox
  },
  fonts: {
    body: "Montserrat"
  }
})


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={customComponents}>
      <Fonts />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
