import type { Developer } from '../../services/types';
import Card from '../Card';
import { CardsGridContainer } from './styles';

interface GridContainerProps {
    devs: Developer[];
    onCardClick: (id: string) => void;
}

const GridContainer = ({ devs, onCardClick }: GridContainerProps) => {
    return (
        <CardsGridContainer>
            {devs &&
                devs.map(dev => (
                    <Card
                        key={dev.id}
                        id={dev.id}
                        nickname={dev.nickname}
                        fullName={dev.name}
                        stacks={dev.stack}
                        onCardClick={onCardClick}
                    ></Card>
                ))}
        </CardsGridContainer>
    );
};

export default GridContainer;
