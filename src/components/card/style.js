import styled from 'styled-components';
import { ButtonStyle } from '../button/style';
import { FadeIn } from 'animate-css-styled-components';

export const CardContainer = styled(FadeIn)`
    background-color: #fff;
    border: 1px solid #e0e0e0;
    margin-bottom: 16px;
    position: relative;
    width: 100%;

    @media (min-width: 480px) {
        margin-bottom: 32px;
    }

    @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: calc(100% / 2 - 16px);
    }

    @media (min-width: 991px) {
        width: calc(100% / 3 - 16px);
    }
`;

export const CardImageButton = styled(ButtonStyle)`
    left: 16px;
    position: absolute;
    top: 16px;

    @media (min-width: 480px) {
        left: 24px;
        top: 24px;
    }
`;

export const CardImageContainer = styled.div`
    width: 100%;
    height: 250px;

    @media (min-width: 480px) {
        height: 300px;
    }
`;

export const CardImage = styled.div`
    background: url(${ props => props.src }) center center no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%;
`;

export const CardContent = styled.div`
    padding: 24px;

    @media (min-width: 480px) {
        padding: 48px;
    }

    @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        justify-content: space-between;
    }
`;

export const CardTitle = styled.div`
    color: #424242;
    font-weight: 500;
    margin-bottom: 8px;

    @media (min-width: 480px) {
        margin-bottom: 16px;
    }
`;

export const CardSubTitle = styled.div`
    color: #BDBDBD;
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 24px;

    @media (min-width: 480px) {
        margin-bottom: 48px;
    }
`;

export const CardFooter = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 16px 0

    @media (min-width: 480px) {
        padding: 24px 0
    }
`;

export const CardPrice = styled.div`
    font-weight: 500;
`;

export const CardRoomInfo = styled.div`
    align-items: center;
    display: flex;

    & > span {
        color: #757575;
        font-weight: 300;
    }
`;

export const CardRoomInfoDivider = styled.div`
    border-right: 1px solid #EEEEEE;
    height: 1rem;
    margin: 0 8px;

    @media (min-width: 480px) {
        margin: 0 16px;
    }
`;
