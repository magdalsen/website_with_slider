import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

import { extendTheme } from '@chakra-ui/react'
import { Button } from './components/Button.tsx'


const navButton = extendTheme({
  components: {
    Button,
  },
})


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={navButton}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
