import { useState } from 'react';
import Globals from './abstracts/Globals';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './abstracts/Themes';
import { sectionSpacingLg } from './abstracts/Mixins';

const Main = styled.main`
  ${sectionSpacingLg}
  max-width: 800px;
  margin: 0 auto;
`;

const App = () => {
  const [theme, setTheme] = useState('dark');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <Globals />
        <Main></Main>
      </ThemeProvider>
    </>
  );
};

export default App;