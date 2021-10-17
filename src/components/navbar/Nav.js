import React from 'react';

import { Links, Navigation } from '../../styles/components/navbar/nav';

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
