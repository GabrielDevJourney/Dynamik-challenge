import { NamesDisplayContainer, NicknameDisplay, FullNameDisplay } from './styles';

interface NamesDisplayProps {
    nickname: string;
    fullName: string;
}

const NamesDisplay = ({ nickname, fullName }: NamesDisplayProps) => {
    return (
        <NamesDisplayContainer>
            <NicknameDisplay>{nickname}</NicknameDisplay>
            <FullNameDisplay>{fullName}</FullNameDisplay>
        </NamesDisplayContainer>
    );
};
export default NamesDisplay