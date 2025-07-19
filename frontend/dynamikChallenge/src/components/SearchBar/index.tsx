import Input from '../Input';
import { SearchBarContainer, SearchButton } from './styles';
interface SearchBarProps {
    searchTerm: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    loading: boolean;
    buttonDisabled?: boolean;
}
const SearchBar = ({
    searchTerm,
    onChange,
    onKeyDown,
    onClick,
    loading, 
    buttonDisabled,
}: SearchBarProps) => {
    return (
        <SearchBarContainer>
            <Input
                inputTitle="Search Developers" 
                type="text" 
                placeholder="Search by nickname, name, or stack..."
                value={searchTerm}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
            <SearchButton onClick={onClick} disabled={buttonDisabled || loading}>
                {loading ? 'Searching...' : 'Search'}
            </SearchButton>
        </SearchBarContainer>
    );
};
export default SearchBar