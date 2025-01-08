import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/nav/Menu';
import Header from './components/Header';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    text: {
      primary: '#ffffff',
      secondary: '#ffffff',
    },
  },
});
import Content from './components/Content';
import './App.scss';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="app-container">
          <Header>
            <Menu></Menu>
          </Header>
          <div className="main">
            <Content></Content>
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
