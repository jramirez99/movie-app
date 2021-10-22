import React from 'react';

import { useFetch } from '../../hooks/useFetch';
import { baseURL, apiKey } from '../../config/api';
import { SlidersMovies } from '../slidersMovies/SlidersMovies';


export const Home = () => {

    const res = useFetch( `${ baseURL }/movie/popular?api_key=${ apiKey }&language=es-MX&page=1` );
    const movies =  res.result.results;
    if( movies === undefined ) return null;

    return (
        <>
            <SlidersMovies 
                movies={movies}
            />

        </>
    );
};
