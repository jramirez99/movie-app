import React from 'react';
import { MovieCatalog } from '../../movieCatalog/MovieCatalog';

import { ContainerGrid } from '../../../styles/components/movieCatalog/movieCatalogStyled';

export const SearchList = ( { movies } ) => {
    const { results } = movies;
    if ( results === undefined ) return null;

    return (
        <>
            <ContainerGrid>
                {
                    results.map( result => (
                        <MovieCatalog 
                            key={ result.id }
                            movie={ result }
                        />
                    ))
                }
            </ContainerGrid>
        </>
    );
};
