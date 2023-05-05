import { useState } from "react";
import { Grid} from "@mui/material";
import Hidden from "@mui/material/Hidden";

import NavBar from "./components/NavBar";
import {Brightness7, Brightness4} from "@mui/icons-material";
import CustomTheme from "./components/custom-theme";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  const icon = darkMode ? <Brightness7/> : <Brightness4/>;

  return (
    <CustomTheme darkMode={darkMode}>
        <Grid container>
        {/* Menu */}
        <Grid item xs={12}>
          <NavBar toggleDarkMode={handleToggleDarkMode} icon={icon}/>
        </Grid>
      
        {/* Aside and Main content */}
        <Grid container>
          <Hidden smDown>
            <Grid item sm={3} md={3} lg={2} style={{ backgroundColor: 'green' }}>
              {/* Aside */}
              <div>Aside content</div>
            </Grid>
          </Hidden>
          <Grid item xs={12} sm={9} md={9} lg={10} style={{ backgroundColor: 'orange' }}>
            {/* Main */}
            <div>Main content</div>
          </Grid>
        </Grid>
      </Grid>
  </CustomTheme>
  )
}

export default App;