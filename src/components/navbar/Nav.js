import React from 'react';

import { Navigation } from '../../styles/components/navbar/navStyled';
import { Links } from '../../styles/base/botonesStyled';

export const Nav = () => {
    return (
        <Navigation>
            <Links to="/">
                Inicio
            </Links>

            <Links to="/latest-realeses">
                Ultimos lanzamientos
            </Links>

            <Links to="/pupulars">
                Populares
            </Links>

            <Links to="/search">
                Buscador
            </Links>
        </Navigation>
    );
};
