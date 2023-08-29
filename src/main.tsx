import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { ChakraProvider } from '@chakra-ui/react'

import { extendTheme } from '@chakra-ui/react'
import { Button } from './components/Button.tsx'
import { Fonts } from './components/Fonts.tsx'

const navButton = extendTheme({
  components: {
    Button,
  },
  fonts: {
    body: "Montserrat"
  },
})


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={navButton}>
      <Fonts />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
