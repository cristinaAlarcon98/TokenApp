import {createTheme} from '@mui/material';
import {palette} from './palette';
import {components} from './components.ts';


export const theme = createTheme({
  palette,
  components,
  typography: {
    h1: {
      fontSize: '2.25rem',
      fontWeight: 600,
      lineHeight: 1.2,
      color: '#FFF',
      textAlign: 'center',
      fontFamily:'"Helvetica Neue"',
    },
    h2: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5,
      color: '#FFF',
      textAlign: 'center',
      fontFamily:'"Helvetica Neue"',
    },
    h3: {
      fontSize: '1.62rem',
      fontWeight: 400,
      lineHeight: 1.2,
      color: '#FFF',
      textAlign: 'center',
      fontFamily:"'Courier Prime Bits'"
    },
    h4: {
      fontSize: '22px',
      fontWeight: 600,
      color: '#374151',
    },
    h5: {
      fontSize: '20px',
      fontWeight: 600,
      color: '#374151',
    },
    h6: {
      fontSize: '16px',
      fontWeight: 600,
      color: '#374151',
    },
    body1: {
      fontSize: '14px',
      fontWeight: 400,
      color: '#374151',
    },
    body2: {
      fontSize: '14px',
      fontWeight: 400,
      color: '#374151',
    },
    subtitle2: {
      fontSize: '10px',
      fontWeight: 400,
      color: '#131C3E',

    },
    subtitle1: {
      fontSize: '10px',
      fontWeight: 600,
      color: '#5A6078',
      textTransform: 'uppercase',

    },
  },

})