import styled from 'styled-components';

export const ButtonStyle = styled.button`
    background-color: #fff;
    border: none;
    border-radius: 2px;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
                0px 2px 2px 0px rgba(0, 0, 0, 0.14),
                0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    color: #BDBDBD;
    outline: none;
    height: 40px;
    letter-spacing: 0.01rem;
    line-height: 1.1rem;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),
                -webkit-box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
    width: 100px;

    &:hover {
        box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    }
`;
