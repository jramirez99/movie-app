import React from 'react';

import { Navigation } from '../../styles/components/navbar/navStyled';
import { Links } from '../../styles/base/botonesStyled';

export const Nav = () => {
    return (
        <Navigation>
            <Links 
                to="/" 
                bg="unset"
            >
                Inicio
            </Links>

            <Links 
                to="/latest-realeses" 
                bg="unset"
            >
                Ultimos lanzamientos
            </Links>

            <Links 
                to="/pupulars" 
                bg="unset"
            >
                Populares
            </Links>

            <Links 
                to="/search" 
                bg="unset"
            >
                Buscador
            </Links>
        </Navigation>
    );
};
