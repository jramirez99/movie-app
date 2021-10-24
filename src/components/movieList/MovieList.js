import React from 'react';

import { Container, Content, Info } from '../../styles/components/movieList/movieListStyled';
import { Links } from '../../styles/base/botonesStyled';

export const MovieList = ( { movies } ) => {
    if ( movies === undefined ) return null;

    const { id, title, poster_path, release_date } = movies;
    const posterPath = `https://image.tmdb.org/t/p/original/${ poster_path }`;

    return (
        <>
            <Container>
                <Content>
                    <img 
                        src={ posterPath }
                        alt={ title }
                    />

                    <Info>
                        <h2> 
                            Titulo 
                            <span> { title } </span> 
                        </h2>
                        <p> 
                            Lanzamiento 
                            <span> { release_date } </span> 
                        </p>
                        <Links
                            to={ `movie/${ id }` }
                            bg="#102770"
                            round="1rem"
                            padding="1rem 2rem"
                        >
                            Ver
                        </Links>
                    </Info>
                </Content>
            </Container>
        </>
    );
};
