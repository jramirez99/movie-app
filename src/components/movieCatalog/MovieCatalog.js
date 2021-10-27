import React from 'react';

import { Card } from '../../styles/components/movieCatalog/movieCatalogStyled';
import { Links } from '../../styles/base/botonesStyled';

export const MovieCatalog = ( { movie } ) => {
    const { id, poster_path, title } = movie;

    const posterPath = `https://image.tmdb.org/t/p/original/${ poster_path }`;

    return (
        <Links
            to={`/movie/${id}`}
            bg="transparent"
            padding="0"
        >
            <Card>
                <div>
                    <img 
                        src={ posterPath }
                        alt={ title }
                    />
                </div>

                <h2> { title } </h2>

            </Card>
        </Links>
    );
};
