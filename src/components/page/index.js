import styled from 'styled-components';

export const PageModule = styled.div`
    height: 100%;
    padding-top: 60px;
    width: 100%;
`;

export const PageHeader = styled.div`
    background-color: #fff;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
                0px 4px 5px 0px rgba(0, 0, 0, 0.14),
                0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    height: 60px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
`;

export const PageHeaderTitle = styled.div`
    font-size: 1.3rem;
    font-weight: 600;
    line-height: 60px;
    margin: auto;
    max-width: 1440px;
    padding: 0 16px;

    @media (min-width: 480px) {
        padding: 0 32px;
    }
`;
