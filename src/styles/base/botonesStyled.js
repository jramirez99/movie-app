import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { secondaryColor, white } from './variablesStyled';

export const Button = styled.button`
    background-color: ${ props => props.bg || `${ secondaryColor }`};
    border: 0;
    border-radius: ${ props => props.round || 0 };
    color: ${ props => props.color || ` ${white} `};
    font-size: ${ props => props.fsize || ` 1.5rem `};
    margin: ${ props => props.margin || '1rem' };
    padding: ${ props => props.padding || '1rem 3rem'};
    text-align: center;

    &:hover {
        background-color: darken(${ props => props.bg || `${ secondaryColor }` }, 5);
        cursor: pointer;
    }
`;

export const Links = styled(Link)`
    background-color: ${ props => props.bg || `${ secondaryColor }`};
    border: 0;
    border-radius: ${ props => props.round || 0 };
    color: ${ props => props.color || ` ${white} `};
    display: inline-block;
    font-size: 1.5rem;
    margin-top: ${ props => props.margin || 0};
    padding: ${ props => props.padding || '1rem 3rem'};
    text-align: center;

    &:hover {
        background-color: darken(${ props => props.bg || `${ secondaryColor }` }, 5);
        cursor: pointer;
    }
`;

export const I = styled.i`
    font-size: ${ props => props.size || '10rem'};
    margin: ${ props => props.margin || '1rem' };
`;