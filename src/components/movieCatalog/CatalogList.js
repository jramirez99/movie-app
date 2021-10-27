import React from 'react';

import { MovieCatalog } from './MovieCatalog';

import { ContainerGrid } from '../../styles/components/movieCatalog/movieCatalogStyled';

export const CatalogList = ( { movies } ) => {

    const list = movies[0].results;
    if ( list === undefined ) return null;

    return (
        <>
            <ContainerGrid>
                {
                    list.map( movie => (
                        <MovieCatalog 
                            key={ movie.id }
                            movie={ movie }
                        />
                    ) )
                }
            </ContainerGrid>
        </>
    );
};
