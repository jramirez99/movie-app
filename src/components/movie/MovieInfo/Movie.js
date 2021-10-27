import React from 'react';

import { useParams } from 'react-router-dom';
import { useFetch } from '../../../hooks/useFetch';
import { baseURL, apiKey } from '../../../config/api';
import { ButtonModal } from '../../modal/Modal';

import { 
        ContainerGrid,  
        Description, 
        Hero,
        TitleBox 
} from '../../../styles/components/movie/movieInfo/movieInfoStyled';



export const Movie = () => {
    const { id }= useParams();

    const res = useFetch( `${ baseURL }/movie/${id}?api_key=${ apiKey }&language=es-MX ` );
    const movie = res.result;

    const { backdrop_path, genres, title, overview, poster_path, release_date } = movie;
    const backdropPath = `https://image.tmdb.org/t/p/original/${ backdrop_path }`;
    const posterPath = `https://image.tmdb.org/t/p/original/${ poster_path }`;

    if ( genres === undefined ) return null;

    return (
        <>
            <Hero
                bg={ backdropPath }
                height="110vh"
            >
                <ContainerGrid className="container">
                    <img 
                        src={ posterPath }
                        alt={ title }
                    />

                    <div>
                        <TitleBox>
                            <h2> 
                                { title }
                                <span> { release_date } </span> 
                            </h2>

                            <ButtonModal id={ id } />
                        </TitleBox>

 
                        <Description> 
                            <p> 
                                Descripción 
                                <span> { overview } </span> 
                            </p>
                        
                            <ul>
                                Géneros
                                {
                                    genres.map( genre => (
                                        <li 
                                            key={ genre.id }
                                        > 
                                            { genre.name } 
                                        </li>
                                    ))
                                }
                            </ul>
                        </Description>
                    </div>
                </ContainerGrid>
            </Hero>
        </>
    );
};
