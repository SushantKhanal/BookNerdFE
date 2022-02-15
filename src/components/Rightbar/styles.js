import { Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledContainer = styled(Container)(({ theme }) => ({
    // marginTop: theme.spacing(20),
    paddingTop: theme.spacing(10),
    position: 'sticky',
    top: 0,
    [theme.breakpoints.down("md")]: {
        display: 'none'
    }
}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
    fontSize: 16,
    fontWeight: 500,
    color: '#8E8E8E',
    textAlign: 'left',
    marginLeft: theme.spacing(2)
}));

export const StyledLink = styled(Typography)(({ theme }) => ({
    fontWeight: 500,
    color: '#0095f6',
    fontSize: 14,
    marginLeft: theme.spacing(5),
    '&:hover': {
        cursor: 'pointer!important'
    },
}));
