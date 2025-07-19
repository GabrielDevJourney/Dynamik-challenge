import styled from 'styled-components';

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
    padding: var(--padding-md);
    width: 100%;
    height: 100vh;
`;

export const PersonalInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: var() var(--spacing-md);
    padding: var(--padding-md);
    border: 1px solid var(--color-primary);
    border-radius: var(--border-radius-md);
`;

export const InfoTitle = styled.span`
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-bold);
    color: var(--color-text);
`;
export const InfoDetail = styled.span`
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-normal);
    color: var(--color-text-low);
`;

export const InfoStackContainer = styled.div`
    border: 1px solid var(--color-primary);
    border-radius: var(--border-radius-md);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: var() var(--spacing-md);
    padding: var(--padding-md);
`;
