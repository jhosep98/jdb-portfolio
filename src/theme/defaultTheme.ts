import { PaletteMode } from '@mui/material';
import { alpha, createTheme, responsiveFontSizes } from '@mui/material/styles';

interface PropsModel {
  mode: PaletteMode;
  primaryColor?: string;
  secondaryColor?: string;
}

export const setTheme = ({ mode = 'light' }: PropsModel) => {
  let theme = createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
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
        light: alpha('#674fee', 0.2),
        contrastText: mode === 'dark' ? '#2E2E31' : '#EFF3F8',
      },
      background: {
        paper: mode === 'dark' ? '#2C2C2E' : '#f4f7fd',
        default: mode === 'dark' ? '#3A3A3C' : '#fff',
      },
      secondary: {
        main: '#EC615B',
        light: alpha('#EC615B', 0.2),
      },
      text: {
        primary: mode === 'dark' ? '#fff' : '#353E6C',
        secondary: mode === 'dark' ? '#fff' : '#B2BEDA',
      },
      divider: '#f4f7fd',
    },
    typography: {
      fontFamily: ['Poppins'].join(','),
      h1: {
        fontSize: '4.9983rem',
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
