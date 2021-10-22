import styled from "styled-components";

import { fColumn } from '../../base/mixinsStyled';
import { devices } from '../../base/mediaQueriesStyled';

export const Navigation = styled.nav`
    ${ fColumn };
    align-items: center;
    margin-top: 3rem;
    text-align: center;

    ${ devices.tablet`
        flex-direction: row;
        align-items: center;
        gap: 1rem;
        margin-top: 0;
    `}
`;