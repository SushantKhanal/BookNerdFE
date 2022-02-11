import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledContainer = styled(Container)(({ theme }) => ({
    // maxWidth: '500px!important',
    width: 500,
    height: 400,
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto',
    [theme.breakpoints.down("sm")]: {
        width: "100vw",
        height: "100vh"
    }
}));

export const StyledForm = styled('form')(({ theme }) => ({
    padding: theme.spacing(2)
}));

export const StyledItem = styled('div')(({ theme }) => ({
    marginBottom: theme.spacing(3)
}));