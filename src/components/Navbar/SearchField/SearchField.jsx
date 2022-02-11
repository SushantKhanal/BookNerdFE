import SearchIcon from '@mui/icons-material/Search';
import { StyledCancelIcon, StyledSearchField, StyledInputBase } from "./SearchFieldStyles";

const SearchField = ({isSearchOpen, setIsSearchOpen}) => {
    return (
        <StyledSearchField isSearchOpen={isSearchOpen}>
            <SearchIcon/>
            <StyledInputBase placeholder="search"/>
            <StyledCancelIcon onClick={()=>setIsSearchOpen(false)}/>
        </StyledSearchField>
    )
}

export default SearchField;