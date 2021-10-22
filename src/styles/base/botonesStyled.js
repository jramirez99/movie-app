import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { secondaryColor, white } from './variablesStyled';

export const Button = styled.button`
    background-color: ${ props => props.bg || `${ secondaryColor }`};
    border: 0;
    color: ${ props => props.color || ` ${white} `};
    font-size: 1.5rem;
    margin-top: 2rem;
    padding: 1rem 3rem;
    text-align: center;

    &:hover {
        background-color: darken(${ props => props.bg}, 5);
        cursor: pointer;
    }
`;


export const Links = styled(Link)`
    background-color: ${ props => props.bg};
    border: 0;
    color: ${ props => props.color || ` ${white} `};
    font-size: 1.5rem;
    display: inline-block;
    margin-top: 1rem;
    padding: 1rem 3rem;
    text-align: center;

    &:hover {
        background-color: darken(${ props => props.bg}, 5);
        cursor: pointer;
    }
`;