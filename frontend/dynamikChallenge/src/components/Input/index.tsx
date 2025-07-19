import { InputS, InputContainer, InputTitle } from './styles';

interface InputProps {
    inputTitle: string;
    placeholder: string;
    type?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Input = ({ inputTitle, placeholder,type,value,onChange,onKeyDown }: InputProps) => {
    return (
        <InputContainer>
            <InputTitle>{inputTitle}</InputTitle>
            <InputS
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
        </InputContainer>
    );
};

export default Input;
