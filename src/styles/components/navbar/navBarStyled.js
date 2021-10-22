import styled from 'styled-components';

import { fColumn } from '../../base/mixinsStyled'
import { primaryColor } from '../../base/variablesStyled';
import { devices } from '../../base/mediaQueriesStyled';


export const Bar = styled.div`
    background-color: ${ primaryColor };
`;

export const NavBarContainer = styled.div`
    ${ fColumn };
    padding:  4rem 0;
    align-items: center;

    ${ devices.tablet`
        flex-direction: row;
        gap: 5rem;
        padding:  2rem 0;
    `}

    img {
        width: 6rem;
    }
`;