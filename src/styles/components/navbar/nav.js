import styled from "styled-components";
import { Link } from 'react-router-dom';

import { flex } from '../../../styles/base/mixinsStyled';
import { white, bold } from '../../base/variablesStyled';
import { devices } from '../../base/mediaQueriesStyled';

export const Navigation = styled.nav`
    ${ flex.column };
    text-align: center;
    margin-top: 5rem;
    align-items: center;

    ${ devices.tablet`
        flex-direction: row;
        align-items: center;
        gap: 2rem;
        margin-top: 0;
    `}
`;

export const Links = styled(Link)`
    color: ${ white };
    margin-bottom: 2rem;
    font-weight: ${ bold };
    font-size: 1.7rem;

    &:last-of-type {
        margin-bottom: 0;
    }
    &:hover {
        opacity: .7;
    }

    ${ devices.tablet`
        margin-bottom: 0;
    `}
`;