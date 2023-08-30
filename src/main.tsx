import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import { ChakraProvider } from '@chakra-ui/react';

import { extendTheme } from '@chakra-ui/react';
import { Button } from './components/customStyles/Button.tsx';
import { Fonts } from './components/customStyles/Fonts.tsx';
import { Modal } from './components/customStyles/Modal.tsx';
import { Checkbox } from './components/customStyles/Checkbox.tsx';

const customComponents = extendTheme({
  components: {
    Button,
    Modal,
    Checkbox,
  },
  fonts: {
    body: 'Montserrat',
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={customComponents}>
      <Fonts />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
