import { BadgeContainer, CloseButton, StackNameText } from './styles';

interface StackBadgeProps {
    stackName: string;
    variant: 'card' | 'form';
    onRemove?: (stackName: string) => void;
}
const StackBadge = ({ stackName, variant, onRemove }: StackBadgeProps) => {
    return (
        <BadgeContainer variant={variant}>
            <StackNameText variant={variant}>{stackName}</StackNameText>
            {onRemove && (
                <CloseButton variant={variant} onClick={() => onRemove(stackName)}>
                    &times;
                </CloseButton>
            )}
        </BadgeContainer>
    );
};

export default StackBadge;
