import styled from 'styled-components';

export const NamesDisplayContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: var(--spacing-sm);
`;
export const NicknameDisplay = styled.span`
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-bold);
    color: var(--color-text);
`;
export const FullNameDisplay = styled.span`
    font-size: var(--font-size-smd);
    font-weight: var(--font-weight-normal);
    color: var(--color-text-low);
`;