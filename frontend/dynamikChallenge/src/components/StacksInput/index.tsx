import React, { useState, useCallback } from 'react';
import Input from '../Input';
import StatusBadge from '../../components/StackBadge';
import { StackInputContainer, TagContainer} from './styles';

interface StackInputProps {
    stacks: string[]; 
    onAddStack: (newStack: string) => void;
    onRemoveStack: (stackToRemove: string) => void; 
}

const StackInput = ({ stacks, onAddStack, onRemoveStack }: StackInputProps) => {
    const [currentStackInput, setCurrentStackInput] = useState('');

    const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentStackInput(event.target.value);
    }, []);

    const handleLocalAddStack = useCallback(
        (event: React.KeyboardEvent<HTMLInputElement>) => {
            if (event.key === 'Enter') {
                const trimmedValue = currentStackInput.trim();
                if (trimmedValue) {
                    onAddStack(trimmedValue);
                    setCurrentStackInput('');
                }
                event.preventDefault();
            }
        },
        [currentStackInput, onAddStack],
    );

    return (
        <StackInputContainer>
            <Input
                inputTitle="Tech Stack"
                type="text"
                placeholder="Type a stack and press Enter (e.g., Python, Docker)"
                value={currentStackInput}
                onChange={handleInputChange}
                onKeyDown={handleLocalAddStack}
            />

            {stacks.length > 0 && (
                <TagContainer>
                    {stacks.map(stack => (
                        <StatusBadge
                            key={stack}
                            stackName={stack}
                            variant="form"
                            onRemove={onRemoveStack}
                        />
                    ))}
                </TagContainer>
            )}
        </StackInputContainer>
    );
};

export default StackInput;
