import { CssBaseline, ThemeProvider } from '@mui/material';

import { setTheme } from 'theme/defaultTheme';

function App() {
  const { theme } = setTheme({});

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <h1>Hello JDB!</h1>
    </ThemeProvider>
  );
}

export default App;
