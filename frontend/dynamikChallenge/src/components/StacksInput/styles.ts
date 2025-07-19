import styled from 'styled-components';

export const StackInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
`;

export const TagContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-sm);
    margin-top: var(--spacing-md);
    padding: var(--padding-sm);
    border-radius: var(--border-radius-md);
    min-height: 40px;
    align-items: center;
`;