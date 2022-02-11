import { styled, alpha } from '@mui/material/styles';
import { Box } from "@mui/system";
import LogoutIcon from '@mui/icons-material/Logout';
import { Badge, Button } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

export const StyledIconsWrapper = styled(Box)(({ theme, isSearchOpen }) => ({
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down("sm")]: {
        display: isSearchOpen ? 'none' : "flex",
    }
}));

export const StyledSearchButton = styled(SearchIcon)(({ theme }) => ({
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
        display: "none"
    },
    fontSize: 28
}))

export const StyledBadge = styled(Badge)(({ theme }) => ({
    marginRight: theme.spacing(2)
}))

export const StyledLogOutIcon = styled(LogoutIcon)(({ theme }) => ({
    display: "none",
    [theme.breakpoints.down("sm")]: {
        display: "block"
    }
}))

export const StyledLogoutButton = styled(Button)(({ theme }) => ({
    display: "block",
    [theme.breakpoints.down("sm")]: {
        display: "none"
    }
}))