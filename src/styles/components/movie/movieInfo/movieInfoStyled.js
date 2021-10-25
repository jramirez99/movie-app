import styled from "styled-components";


import { devices } from '../../../base/mediaQueriesStyled';
import { fColumn, flex, grid } from '../../../base/mixinsStyled';
import { bolder, light, white } from '../../../base/variablesStyled';
import { Button } from '../../../base/botonesStyled';

export const Hero = styled.div`
    background-image: url(${ props => props.bg });
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
    color: ${ white };
    position: relative;
    height: ${ props => props.height || '60rem'};

    ${ devices.laptop(`height: 100vh`) }

    &::before {
        content: '';
        background-color: #000000;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        opacity: .6;
    }
`;
export const ContainerGrid = styled.div`
    ${ fColumn };
    align-items: center;
    padding-top: 5rem;
    position: relative;

    img {
        width: 10rem;
    }

    span {
        display: block;
        font-weight: ${ light };
        font-size: 1.5rem;
        margin-top: 1.5rem;
    }

    ${ devices.tablet(`
        ${ grid( 2, '2rem' ) };
        padding-top: 10rem;

        img {
            width: auto;
            margin: 0 auto;
        }
    `)}

    ${ devices.laptop(`
        img {
            width: 35rem;
            margin: 0 auto;
        }
    `)}
`;
export const TitleBox = styled.div`
    ${ flex( '1rem' ) };
    justify-content: space-between;
    margin-top: 2rem;
    align-items: flex-start;

    h2 {
        font-size: 1.7rem;
    }
`;
export const ButtonP = styled( Button )`
    margin: 0;
`; 
export const Description = styled.div`
    ${ grid( 3, '2rem' ) };
    font-size: 2rem;
    font-weight: ${ bolder };
    margin-top: 3rem;;

    ${ devices.tablet(`
        ${ fColumn() };
    `)}

    p {
        grid-column: 1 / 3;

        span {
            height: 25rem;
            overflow: auto;

            ${ devices.laptop(`
                height: auto;

            `)}
        }
    }
    ul {
        font-size: 2rem;
        
        li {
            font-weight: ${ light };
            margin-top: .6rem;
            font-size: 1.6rem;
        }
    }
`;