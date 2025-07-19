import React, { useState, useCallback } from 'react';
import Input from '../Input';
import StackInput from '../StacksInput';
import { Form, SubmitBtn } from './styles';
import type { DeveloperRequest } from '../../services/types';
import { postDeveloper } from '../../services/backendApi';

interface DevFormProps {
    onFormSubmitSuccess?: () => void;
}

const DevForm = ({ onFormSubmitSuccess }: DevFormProps) => {
    const [nickname, setNickname] = useState('');
    const [fullName, setFullName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [techStacks, setTechStacks] = useState<string[]>([]);

    const handleNicknameChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setNickname(event.target.value);
    }, []);

    const handleFullNameChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setFullName(event.target.value);
    }, []);

    const handleBirthDateChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setBirthDate(event.target.value);
    }, []);

    const handleAddTechStack = useCallback((newStack: string) => {
        setTechStacks(prevStacks => {
            if (!prevStacks.includes(newStack)) {
                return [...prevStacks, newStack];
            }
            return prevStacks;
        });
    }, []);

    const handleRemoveTechStack = useCallback((stackToRemove: string) => {
        setTechStacks(prevStacks => prevStacks.filter(stack => stack !== stackToRemove));
    }, []);

    const handleSubmit = useCallback(
        async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();

            const payload: DeveloperRequest = {
                nickname,
                name: fullName,
                birth_date: birthDate,
                stack: techStacks,
            };

            const responseData = await postDeveloper(payload);

            if (responseData) {
                alert('Developer profile submitted successfully!');
                setNickname('');
                setFullName('');
                setBirthDate('');
                setTechStacks([]);
                if (onFormSubmitSuccess) {
                    onFormSubmitSuccess();
                }
            } else {
                alert('Failed to submit developer profile. Check console for error details.');
            }
        },
        [nickname, fullName, birthDate, techStacks, onFormSubmitSuccess],
    );

    return (
        <Form onSubmit={handleSubmit}>
            <Input
                inputTitle="Nickname"
                type="text"
                placeholder="Write your nickname"
                value={nickname}
                onChange={handleNicknameChange}
            />
            <Input
                inputTitle="Full Name"
                type="text"
                placeholder="Write your full name"
                value={fullName}
                onChange={handleFullNameChange}
            />
            <Input
                inputTitle="Birth Date"
                type="date"
                placeholder="Birth Date"
                value={birthDate}
                onChange={handleBirthDateChange}
            />
            <StackInput
                stacks={techStacks}
                onAddStack={handleAddTechStack}
                onRemoveStack={handleRemoveTechStack}
            />

            <SubmitBtn type="submit">Submit Developer Profile</SubmitBtn>
        </Form>
    );
};

export default DevForm;
