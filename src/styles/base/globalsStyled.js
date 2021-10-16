import { createGlobalStyle } from 'styled-components';

import {
    mainFont,
    bolder
} from './variablesStyled';

export const GlobalsStyled = createGlobalStyle`
    html {
        font-size: 62.5%;
        box-sizing: border-box;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body {
        font-family: ${ mainFont };
        font-size: 1.6rem;
    }
    p {
        font-size: 2rem;
    }
    .container {
        width: 95%;
        max-width: 1200px;
        margin: 0 auto;
    }

    a {
        text-decoration: none;
    }

    img {
        max-width: 100%;
    }

    h1, h2, h3 {
        font-family: ${ mainFont };
        margin: 0 0 5 / 2 0 ;
        font-weight: ${ bolder };
        text-align: center;
    }

    h1 {
        font-size: 4rem;
    }
    h2 {
        font-size: 3.6rem;
    }
    h3 {
        font-size: 3rem;
        text-align: center;
    }
`;