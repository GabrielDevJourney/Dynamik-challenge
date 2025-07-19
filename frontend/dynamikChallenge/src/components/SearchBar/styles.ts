import { styled } from 'styled-components';

export const SearchBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
    padding: var(--padding-md);
    justify-content: center;
    border: 1px solid var(--color-text-low);
    border-radius: var(--border-radius-md);
    background-color: var(--color-background-containers);
`;

export const SearchButton = styled.button`
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
