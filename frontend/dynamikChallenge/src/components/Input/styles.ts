import styled from 'styled-components';

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: var(--spacing-md);
    padding: var(--padding-sm);
`;
export const InputS = styled.input`
    height: 50px;
    padding: var(--padding-sm);
    border-radius: var(--border-radius-md);
    background-color: var(--color-background);
    border: 1px solid var(--color-text-low);
    font-size: var(--font-size-md);
    transition: border-color 0.2s ease-in-out;
    outline: none;
    &:focus {
        border: 1px solid var(--color-primary);
    }
`;

export const InputTitle = styled.span`
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-medium);
    color: var(--color-text);
`;
