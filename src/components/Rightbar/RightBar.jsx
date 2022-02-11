import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { StyledContainer, StyledTitle, StyledLink } from "./RightBarStyles";
import List from '@mui/material/List';

const Rightbar = () => {
    return (
        <StyledContainer>
            <StyledTitle>Suggestions for you</StyledTitle>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start" 
                secondaryAction={
                    <StyledLink underline="hover">
                        Follow
                    </StyledLink>
                }>
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={require("../../assets/avatars/avatar1.png")} />
                    </ListItemAvatar>
                    <ListItemText primary="Nassim Taleb"
                    secondary={
                        <Typography variant="body2" sx={{fontSize: 12}}>Suggested for you</Typography>
                    }/>
                </ListItem>

                <ListItem alignItems="flex-start" 
                secondaryAction={
                    <StyledLink underline="hover">
                        Follow
                    </StyledLink>
                }>
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={require("../../assets/avatars/avatar2.png")} />
                    </ListItemAvatar>
                    <ListItemText primary="Annie Duke"
                    secondary={
                        <Typography variant="body2" sx={{fontSize: 12}}>Suggested for you</Typography>
                    }/>
                </ListItem>

                <ListItem alignItems="flex-start" 
                secondaryAction={
                    <StyledLink underline="hover">
                        Follow
                    </StyledLink>
                }>
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={require("../../assets/avatars/avatar1.png")} />
                    </ListItemAvatar>
                    <ListItemText primary="Naval Ravikant"
                    secondary={
                        <Typography variant="body2" sx={{fontSize: 12}}>Suggested for you</Typography>
                    }/>
                </ListItem>

            </List>
        </StyledContainer>
    )
}

export default Rightbar;
