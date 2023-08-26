import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Welcome from './pages/Welcome/Welcome';
import Calculator from './pages/Calculator/Calculator';
import NavMenu from './components/NavMenu';
import { GlobalStyles } from './components/GlobalStyles';

const theme = {
  colors: {
    fonsPagina: '#ff6b6b',
    textButton: '#ffffff',
  },
  spacing: {
    padding: '20px', // Defineix el padding aquí
    margin: '20px', // Defineix altres propietats si és necessari
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
       
        <Routes>
          <Route path="" element={<Welcome />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>

        <GlobalStyles />
        <NavMenu />
      </Router>
    </ThemeProvider>
  );
}

export default App;
