import styled from 'styled-components';
interface StackBadgeProps {
    variant: 'card' | 'form';
}

export const BadgeContainer = styled.div<StackBadgeProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    background-color: ${props =>
        props.variant === 'card' ? 'var(--color-secondary)' : 'var(--color-background-containers)'};

    border: 1px solid var(--color-primary);
    border-radius: var(--border-radius-md);
    padding: var(--padding-sm);
    gap: ${props => (props.variant === 'card' ? '0px' : 'var(--spacing-sm)')};
    margin-bottom: var(--spacing-sm);
`;
export const StackNameText = styled.span<StackBadgeProps>`
    font-size: ${props => (props.variant === 'card' ? '12px' : '16px')};
    font-weight: var(--font-weight-medium);
    color: ${props => (props.variant === 'card' ? 'var(--color-primary)' : 'var(--color-text)')};
`;
export const CloseButton = styled.button<StackBadgeProps>`
    display: ${props => (props.variant === 'card' ? 'none' : 'block')};
    background: none;
    border: none;
    color: var(--color-delete);
    font-size: var(--font-size-md);
    cursor: pointer;
    padding: 0;
    line-height: 1;

    &:hover {
        color: var(--color-delete);
    }
`;
