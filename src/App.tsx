import React from 'react';

import FooterComponent from './components/footer/footer.component';
import AppRouter from './app.router';
import { ThemeProvider } from 'styled-components';
import { guidelineColors } from './theme';
import './App.css';

const getTheme = () => guidelineColors;

const App = () =>{
  return (
    <ThemeProvider theme={getTheme()}>
      <section>
        <AppRouter />
      </section>
      <FooterComponent />
    </ThemeProvider>
  );
}

export default App;

