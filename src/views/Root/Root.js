import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from 'components/atoms/Button/Button';
import { theme } from 'theme/mainTheme';
import GlobalStyle from '../../theme/GlobalStyle';

const Root = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <h1>Hello zayonsee</h1>
        <Button>open / close</Button>
        <Button secondary>open / close</Button>
      </>
    </ThemeProvider>
  </div>
);

export default Root;
