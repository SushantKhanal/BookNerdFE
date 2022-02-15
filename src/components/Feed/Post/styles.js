import { Card, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledCard = styled(Card)(({ theme }) => ({
    marginBottom: theme.spacing(5),
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
}));

export const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
    height: 250,
    [theme.breakpoints.down("sm")]: {
        height: 200
    }
}));
