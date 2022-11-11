import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './Context/context';
import GlobalStyle from './style';
import { ThemeProvider } from 'styled-components';


const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = {
  header_color: '#22223b',
  btn_color:  '#0000FF'

}
root.render(
  <React.StrictMode>
  <AppProvider>
  <GlobalStyle />
  <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
    </AppProvider>
  </React.StrictMode>
);

