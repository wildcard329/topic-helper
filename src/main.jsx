// react
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

// material-ui
import { theme } from './utils/constants/materialTheme';
import { ThemeProvider, createTheme } from "@mui/material";

const muiTheme = createTheme(theme);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={muiTheme}>
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
)
