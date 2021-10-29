import React from 'react';

import img from '../../images/pageNotFound.svg';

import { Container } from '../../styles/components/error303/error404';

export const Error404 = () => {
    return (
        <Container>
            <img 
                src={ img }
                alt="imagen"
            />

            <h2> Error página no encontrada </h2>
        </Container>
    );
};
