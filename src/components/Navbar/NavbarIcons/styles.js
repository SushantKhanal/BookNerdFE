import { styled } from '@mui/material/styles';
import { Box } from "@mui/system";
import { Badge } from "@mui/material"
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