import styled from 'styled-components';

import { fColumn, flex } from '../../base/mixinsStyled';
import { light, bolder } from '../../base/variablesStyled';
import { devices } from '../../base/mediaQueriesStyled';

export const Container = styled.div`
    max-width: 95%;
    margin: 0 auto;
    margin-top: 1rem;
`;
export const Content = styled.div`
    ${ fColumn };
    align-items: center;

    img {
        width: 16rem;
    }

    ${ devices.tablet(`
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        img {
            width: 5rem;
        }
        `) 
    }
`;

export const Info = styled.div`
    ${ flex( '1rem' ) };
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
    width: 100%;

    h2 {
        font-size: 1.5rem;
        text-align: center;
        width: 50%; 
        min-height: 8rem;
    }
    p {
        font-size: 1.5rem;
        font-weight: ${ bolder };
        text-align: left;
        /* width: 10rem; */
        min-height: 8rem;
    }
    span {
        display: block;
        font-weight: ${ light };
        margin-top: .8rem;
    }

    ${ devices.laptop(` height: auto; `) }
`;