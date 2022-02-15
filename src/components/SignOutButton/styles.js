import { styled } from '@mui/material/styles';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from "@mui/material"

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
