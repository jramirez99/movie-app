import React from 'react';

import { useFetch } from '../../hooks/useFetch';
import { apiKey, baseURL } from '../../config/api';
import { MovieList } from './MovieList';

export const TopRated = () => {
    const res = useFetch( `${ baseURL }/movie/top_rated?api_key=${ apiKey }&language=es-MX&page=1` );
    const movies =  res.result.results;
    if ( movies === undefined ) return null;

    return (
        <>
            {
                movies.map( movie => (
                    <MovieList 
                        key={ movie.id }
                        movies={ movie }
                    />
                ))
            }
        </>
    );
};
