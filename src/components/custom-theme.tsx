import React, {createContext} from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export const CustomThemeContext = createContext({

});

interface Props{
    darkMode: boolean;
    children: React.ReactNode;
}
function CustomTheme({darkMode, children}: Props) {

    const theme = createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          primary: {
            main: "#1976d2",
          },
          secondary: {
            main: "#dc004e",
          },
        },
      });
   
    return(
        <CustomThemeContext.Provider value={{theme}}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </CustomThemeContext.Provider>

    );
}

export default CustomTheme;