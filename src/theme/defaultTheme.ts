import { Theme } from 'interfaces';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

interface PropsModel {
  mode: Theme;
  primaryColor?: string;
  secondaryColor?: string;
}

declare module '@mui/material/styles' {
  // eslint-disable-next-line @typescript-eslint/naming-convention, no-unused-vars
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
  }
}

export const setTheme = ({ mode = 'light' }: PropsModel) => {
  let theme = createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            boxSizing: 'border-box',
            fontSize: '16px',
            scrollBehavior: 'smooth',
          },
          body: {
            overflowX: 'hidden',
            margin: 0,
            scrollbarColor: mode === 'dark' ? '#2E2E31' : '#f4f7fd transparent',
            '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
              backgroundColor: 'transparent',
              width: 6,
              height: 6,
            },
            '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
              borderRadius: 6,
              backgroundColor: mode === 'dark' ? '#2E2E31' : '#f4f7fd',
              border: '1px solid transparent',
            },
            '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus':
              {
                backgroundColor: mode === 'dark' ? '#2E2E31' : '#f4f7fd',
              },
            '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active':
              {
                backgroundColor: mode === 'dark' ? '#2E2E31' : '#f4f7fd',
              },
            '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover':
              {
                backgroundColor: mode === 'dark' ? '#2E2E31' : '#f4f7fd',
              },
            '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
              backgroundColor: 'transparent',
            },
          },
        },
      },
    },
    palette: {
      mode,
      primary: {
        main: '#674fee',
        light: 'rgba(97, 62, 234, 0.1)',
        contrastText: mode === 'dark' ? '#2E2E31' : '#EFF3F8',
      },
      background: {
        paper: mode === 'dark' ? '#2C2C2E' : '#f4f7fd',
        default: mode === 'dark' ? '#3A3A3C' : '#fff',
      },
      error: {
        main: '#F25A5A',
      },
      text: {
        primary: mode === 'dark' ? '#fff' : '#353E6C',
        secondary: mode === 'dark' ? '#fff' : '#B2BEDA',
      },
      success: {
        main: '#4EE1C1',
      },
      warning: {
        main: '#FFC43A',
      },
    },
    typography: {
      fontFamily: ['Poppins'].join(','),
      h1: {
        fontSize: '3.75rem',
        fontWeight: 600,
        lineHeight: 1.27,
      },
      h2: {
        fontSize: '3rem',
      },
      h3: {
        fontSize: '2.25rem',
      },
      h4: {
        fontSize: '1rem',
      },
      h5: {
        fontSize: '0.85rem',
      },
      h6: {
        fontSize: '0.7rem',
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1500,
        xxl: 1920,
      },
    },
    shadows: [
      'none',
      'rgb(0 0 0 / 9%) 0px 3px 12px',
      'rgb(0 0 0 / 9%) 0px 3px 12px',
      'rgb(0 0 0 / 9%) 0px 3px 12px',
      'rgb(0 0 0 / 9%) 0px 3px 12px',
      'rgb(0 0 0 / 9%) 0px 3px 12px',
      'rgb(0 0 0 / 9%) 0px 3px 12px',
      'rgb(0 0 0 / 9%) 0px 3px 12px',
      'rgb(0 0 0 / 9%) 0px 3px 12px',
      'rgb(0 0 0 / 9%) 0px 3px 12px',
      'rgb(0 0 0 / 9%) 0px 3px 12px',
      'rgb(0 0 0 / 9%) 0px 3px 12px',
      'rgb(0 0 0 / 9%) 0px 3px 12px',
      'rgb(0 0 0 / 9%) 0px 3px 12px',
      'rgb(0 0 0 / 9%) 0px 3px 12px',
      'rgb(0 0 0 / 9%) 0px 3px 12px',
      'rgb(0 0 0 / 9%) 0px 3px 12px',
      'rgb(0 0 0 / 9%) 0px 3px 12px',
      'rgb(0 0 0 / 9%) 0px 3px 12px',
      'rgb(0 0 0 / 9%) 0px 3px 12px',
      'rgb(0 0 0 / 9%) 0px 3px 12px',
      'rgb(0 0 0 / 9%) 0px 3px 12px',
      'rgb(0 0 0 / 9%) 0px 3px 12px',
      'rgb(0 0 0 / 9%) 0px 3px 12px',
      'rgb(0 0 0 / 9%) 0px 3px 12px',
    ],
  });

  theme = responsiveFontSizes(theme);

  return { theme };
};
