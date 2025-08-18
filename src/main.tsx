import { Provider } from './components/ui/provider.tsx'
import { ChakraProvider} from "@chakra-ui/react";
import {ColorModeProvider } from "./components/ui/color-mode";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ColorModeSwitch from './components/ColorModeSwitch.tsx';
//import theme from './theme'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider>
      {/* //<ColorModeSwitch /> */}
      <App />
    </Provider>
  </React.StrictMode>,
);
