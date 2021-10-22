import React from 'react';

import { useFetch } from '../../hooks/useFetch';
import { baseURL, apiKey } from '../../config/api';
import { SlidersMovies } from '../slidersMovies/SlidersMovies';
import { Spinner } from '../spinner/Spinner';


export const Home = () => {
    const res = useFetch( `${ baseURL }/movie/now_playing?api_key=${ apiKey }&language=es-MX&page=1` );
    if ( res.loading || !res.result ) {
        return <Spinner />
    };

    const movies =  res.result.results;

    return (
        <>
            <SlidersMovies 
                movies={movies}
            />

        </>
    );
};
