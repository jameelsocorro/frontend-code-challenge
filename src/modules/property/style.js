import styled from 'styled-components';

export const PropertyContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 1440px;
    padding: 16px;

    @media (min-width: 480px) {
        justify-content: space-between;
        padding: 32px;
    }

    @media (min-width: 991px) {
        margin: auto;
    }
`;
