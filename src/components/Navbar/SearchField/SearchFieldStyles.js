import { styled, alpha } from '@mui/material/styles';
import CancelIcon from '@mui/icons-material/Cancel';
import { Box } from "@mui/system";
import { InputBase } from '@mui/material';

export const StyledSearchField = styled(Box)(({ theme, isSearchOpen }) => ({
    display: 'flex',
    alignItems: 'center',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: '50%',
    [theme.breakpoints.down("sm")]: {
        display: isSearchOpen ? 'flex' : "none",
        width: '70%',
    },
}));

export const StyledCancelIcon = styled(CancelIcon)(({ theme }) => ({
    display: "block",
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    width: '90%'
}));
