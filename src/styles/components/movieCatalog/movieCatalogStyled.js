import styled from 'styled-components';

import { devices } from '../../base/mediaQueriesStyled';
import { grid } from '../../base/mixinsStyled';
import { black, light } from '../../base/variablesStyled';

export const ContainerGrid = styled.div`
    ${ grid( 2, '1rem' ) }

    ${ devices.tablet(`
        ${ grid( 4, '1rem' ) }
    `)}

    ${ devices.laptop(`
        ${ grid( 6, '1rem' ) }
    `)}
`;

export const Card = styled.div`
    max-width: 95%;
    margin: 0 auto;
    margin-top: 5rem;
    
    ${ devices.tablet(`
        transition: transform .3s ease-in-out;

        &:hover {
            transform: scale(1.1) rotate(6deg);
        }
    `)}


    div {
        display: flex;
        justify-content: center;

        img {
            object-fit: cover;
            width: 20rem;
            height: 30rem;
            display: flex;
            align-self: center;
        }
    }

    h2 {
        color: ${ black };
        font-weight: ${ light };
        max-width: 85%;
        margin: 0 auto;
        font-size: 1.8rem;
        margin-top: 2rem;
    }
`;
