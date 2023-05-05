import { AppBar, Toolbar, Typography, IconButton} from "@mui/material";
import logo from "../assets/logo.webp";

interface Props{
    icon: JSX.Element;
    toggleDarkMode: () => void;
}

function NavBar({icon, toggleDarkMode}: Props) {

    return(
        <AppBar position="static">
            <Toolbar>
                <img src={logo} alt="logo" style={{width: 50, height: 50, marginRight: 10}}/>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    My App
                </Typography>
                <IconButton color="inherit" onClick={toggleDarkMode}>
                   {icon}
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
