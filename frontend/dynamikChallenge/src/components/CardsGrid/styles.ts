import styled from 'styled-components';

export const CardsGridContainer = styled.div`
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(4, minmax(250px, 1fr));

    @media (max-width: 1300px) {
        grid-template-columns: repeat(3, minmax(250px, 1fr));
    }

    @media (max-width: 992px) {
        grid-template-columns: repeat(2, minmax(250px, 1fr));
    }

    @media (max-width: 670px) {
        grid-template-columns: repeat(1, minmax(250px, 1fr));
    }
`;
