import { Provider } from './components/ui/provider.tsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
//import theme from './theme'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider>
      {/* //<ColorModeSwitch /> */}
      <App />
    </Provider>
  </React.StrictMode>,
);
