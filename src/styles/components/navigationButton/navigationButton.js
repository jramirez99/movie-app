import styled from "styled-components";

import { Links } from '../../base/botonesStyled';
import { devices } from '../../base/mediaQueriesStyled';

export const Button = styled( Links )`
    margin: 0;
    width: 100%;
    
    ${ devices.laptop(`
        margin-top: 2rem;
        width: 11rem;
    `)}
`;