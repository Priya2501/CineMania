import {createTheme} from "@mui/material/styles";

export const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      secondary: {light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d'},
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884'},
    },
});