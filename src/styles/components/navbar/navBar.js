import styled from 'styled-components';

import { flex } from '../../../styles/base/mixinsStyled'
import { primaryColor } from '../../base/variablesStyled';
import { devices } from '../../base/mediaQueriesStyled';


export const Bar = styled.div`
    background-color: ${ primaryColor };
`;

export const NavBarContainer = styled.div`
    ${ flex.column };
    padding: 4rem;
    align-items: center;

    ${ devices.tablet`
        flex-direction: row;
        gap: 5rem;
    `}

    img {
        width: 6rem;
    }
`;