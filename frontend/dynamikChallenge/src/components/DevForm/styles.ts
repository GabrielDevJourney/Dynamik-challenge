import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: var(--spacing-md);
    padding: var(--padding-md);
    background-color: var(--color-background-containers);
    border-radius: var(--border-radius-md);
    border: 1px solid var(--color-text-low);
`;

export const SubmitBtn = styled.button`
    padding: var(--padding-md);
    background-color: var(--color-primary);
    color: white;
    border: none;
    border-radius: var(--border-radius-md);
    font-size: var(--font-size-md);
    cursor: pointer;
    margin-top: var(--spacing-lg);
    width: 100%;
`;
