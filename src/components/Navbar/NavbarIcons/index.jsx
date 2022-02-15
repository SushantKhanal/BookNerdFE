import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SignOutButton from '../../SignOutButton';
import {StyledIconsWrapper, StyledSearchButton, StyledBadge } from './styles';

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
            <SignOutButton/>
        </StyledIconsWrapper>
    )
}

export default NavBarIcons;
