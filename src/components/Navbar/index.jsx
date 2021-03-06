import { AppBar, Toolbar, Typography } from "@mui/material"
import { styled } from '@mui/material/styles';
import { useState } from "react";
import NavBarIcons from "./NavbarIcons";
import SearchField from "./SearchField";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex', 
    justifyContent: 'space-between'
}));

const Navbar = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    return (
        <AppBar>
            <StyledToolbar>
                <Typography variant="h6">
                    B-Nerd
                </Typography>
                <SearchField isSearchOpen={isSearchOpen} setIsSearchOpen={(state) => setIsSearchOpen(state)}/>
                <NavBarIcons isSearchOpen={isSearchOpen} setIsSearchOpen={(state) => setIsSearchOpen(state)}/>
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar;
