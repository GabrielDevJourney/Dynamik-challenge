import NamesDisplay from '../NamesDisplay';
import StatusBadge from '../StackBadge';
import { CardContainer, BadgeContainerTitle, StackBadgesContainer } from './styles';

interface CardProps {
    id: string;
    nickname: string;
    fullName: string;
    stacks: string[];
    onCardClick: (id: string) => void;
}

const Card = ({ id, nickname, fullName, stacks, onCardClick }: CardProps) => {
    return (
        <CardContainer onClick={() => onCardClick(id)}>
            <NamesDisplay nickname={nickname} fullName={fullName} />
            <BadgeContainerTitle>Tech Stack</BadgeContainerTitle>
            <StackBadgesContainer>
                {stacks &&
                    stacks.map(stack => (
                        <StatusBadge key={stack} variant="card" stackName={stack} />
                    ))}
            </StackBadgesContainer>
        </CardContainer>
    );
};

export default Card;
