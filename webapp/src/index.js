import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#d1d9ff',
      main: '#9fa8da',
      dark: '#6f79a8',
      contrastText: '#000000'
    },
    secondary: {
      light: '#ffbb93',
      main: '#ff8a65',
      dark: '#c75b39',
      contrastText: '#000000'
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
