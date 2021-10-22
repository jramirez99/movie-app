import React from 'react';

import { Carousel } from 'react-bootstrap';
import { ContainerInfo, Hero } from '../../styles/components/slidersMovies/slidersMovieStyled';
import { Links } from '../../styles/base/botonesStyled';


export const SlidersMovies = ( { movies } ) => {
    let backdropPath = '';

    return (
        <>
            <Carousel fade pause={false}>
                {
                    movies.map( movie => {

                        backdropPath = `https://image.tmdb.org/t/p/original/${ movie.backdrop_path }`

                        return (
                            <Carousel.Item 
                                interval={ 3000 } 
                                key={ movie.id }
                            >
                                <Hero bg={backdropPath}> </Hero>

                                <Carousel.Caption>
                                    <ContainerInfo>
                                        <h2> { movie.title } </h2>
                                        <p> { movie.overview } </p>

                                        <Links 
                                            to={`/movie/${ movie.id }`}
                                            bg="#102770"
                                        >
                                            Leer mas
                                        </Links>
                                    </ContainerInfo>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    } )
                }
            </Carousel>
        </>
    );
};
