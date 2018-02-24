import { injectGlobal } from 'styled-components';

injectGlobal`
    .root,
    #app,
    html {
        height: 100%;
        width: 100%;
    }
    body {
        background-color: #FAFAFA;
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        letter-spacing: 0.01rem;
        margin: 0;
        height: 100%;
        width: 100%;
    }
    a {
        text-decoration: none;
    }
    ul {
        margin: 0px;
        padding-left: 16px;
    }
    sup {
        vertical-align: super;
        line-height: 0;
    }
`;
