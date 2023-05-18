// import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App/App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const theme = createTheme({
    palette: {
      primary: {
        main:'#0D4C92'
      },
      secondary: {
        main: '#59C1BD'
      }
    }
  });

root.render(
  <BrowserRouter>
      <ThemeProvider theme={theme}>
          <App />
      </ThemeProvider>
  </BrowserRouter>
);
