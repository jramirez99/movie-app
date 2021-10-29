import styled from "styled-components";

import { fColumn } from '../../base/mixinsStyled';
import { devices } from '../../base/mediaQueriesStyled';

export const Container = styled.div`
    ${ fColumn() };
    align-items: center;
    justify-content: center;
    margin-top: 5rem;

    img {
        width: 30rem;
    }
    h2 {
        margin-top: 5rem;
        font-size: 2rem;
    }

    ${devices.laptop(`
        height: 50rem;

        h2 {
            font-size: 3rem;
        }
    `)};

`;