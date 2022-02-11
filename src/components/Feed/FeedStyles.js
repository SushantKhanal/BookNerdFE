import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledContainer = styled(Container)(({ theme }) => ({
    paddingTop: theme.spacing(10)
}));