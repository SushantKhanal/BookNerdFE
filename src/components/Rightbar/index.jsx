import { ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { StyledContainer, StyledTitle, StyledLink } from "./styles";
import List from '@mui/material/List';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const Rightbar = () => {
    return (
        <StyledContainer>
            <StyledTitle>Book Clubs for you</StyledTitle>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start" 
                secondaryAction={
                    <StyledLink underline="hover">
                        Join
                    </StyledLink>
                }>
                    <ListItemIcon>
                        <MenuBookIcon color="primary" fontSize="large"/>
                    </ListItemIcon>
                    <ListItemText primary="The Black Swan"
                    secondary={
                        <Typography variant="body2" sx={{fontSize: 12}}>Suggested for you</Typography>
                    }/>
                </ListItem>
                <ListItem alignItems="flex-start" 
                secondaryAction={
                    <StyledLink underline="hover">
                        Join
                    </StyledLink>
                }>
                    <ListItemIcon>
                        <MenuBookIcon color="primary" fontSize="large"/>
                    </ListItemIcon>
                    <ListItemText primary="Thinking in Bets"
                    secondary={
                        <Typography variant="body2" sx={{fontSize: 12}}>Suggested for you</Typography>
                    }/>
                </ListItem>
                <ListItem alignItems="flex-start" 
                secondaryAction={
                    <StyledLink underline="hover">
                        Join
                    </StyledLink>
                }>
                    <ListItemIcon>
                        <MenuBookIcon color="primary" fontSize="large"/>
                    </ListItemIcon>
                    <ListItemText primary="Naval's Almanac"
                    secondary={
                        <Typography variant="body2" sx={{fontSize: 12}}>Suggested for you</Typography>
                    }/>
                </ListItem>
            </List>
        </StyledContainer>
    )
}

export default Rightbar;
