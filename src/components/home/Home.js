import React from 'react';

import { useFetch } from '../../hooks/useFetch';
import { baseURL, apiKey } from '../../config/api';
import { SlidersMovies } from '../slidersMovies/SlidersMovies';
import { Spinner } from '../spinner/Spinner';
import { PopularsList } from '../movieList/PopularsList';
import { TopRated } from '../movieList/TopRated';
import { ContainerGrid, ListBox, H2,Info } from '../../styles/components/home/homeStyled';



export const Home = () => {
    const res = useFetch( `${ baseURL }/movie/now_playing?api_key=${ apiKey }&language=es-MX&page=1` );
    if ( res.loading || !res.result ) {
        return <Spinner />
    };

    const movies =  res.result.results;

    return (
        <>
            <SlidersMovies 
                movies={ movies }
            />

            <ContainerGrid>
                <ListBox>
                    <H2> Populares </H2>
                    <Info>
                        <PopularsList />
                    </Info>
                </ListBox>

                <ListBox>
                    <H2> Más valorado </H2>
                    <Info>
                        <TopRated />
                    </Info>
                </ListBox>
            </ContainerGrid>
        </>
    );
};
