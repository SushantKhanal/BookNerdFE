import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {StyledIconsWrapper, StyledSearchButton, StyledBadge, StyledLogOutIcon, StyledLogoutButton} from './NavbarIconsStyles';

const NavBarIcons = ({isSearchOpen, setIsSearchOpen}) => {
    return (
        <StyledIconsWrapper isSearchOpen={isSearchOpen}>
            <StyledSearchButton onClick={() => setIsSearchOpen(true)}/>
            <StyledBadge badgeContent={4} color="secondary">
                <MarkUnreadChatAltIcon/>
            </StyledBadge>
            <StyledBadge badgeContent={4} color="secondary">
                <NotificationsNoneIcon/>
            </StyledBadge>
            <StyledLogOutIcon/>
            <StyledLogoutButton color="inherit">Logout</StyledLogoutButton>
        </StyledIconsWrapper>
    )
}

export default NavBarIcons;