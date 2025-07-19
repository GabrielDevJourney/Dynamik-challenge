import styled from 'styled-components';

export const CardContainer = styled.div`
    min-width: 250px;
    background-color: var(--color-background-containers);
    border-radius: var(--border-radius-md);
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: var(--spacing-md);
    padding: var(--padding-md);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`;

export const BadgeContainerTitle = styled.span`
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-medium);
    color: var(--color-text-low);
    letter-spacing: 0.1rem;
`;

export const StackBadgesContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: var(--spacing-sm);
`;
