import React, { useState } from 'react';

import queryString from 'query-string';

import { useFetch } from '../../../hooks/useFetch';
import { baseURL, apiKey } from '../../../config/api';
import { SearchList } from './SearchList';

import { Form } from '../../../styles/components/search/searchStyled';
import { Button } from '../../../styles/base/botonesStyled';

export const Search = ( { history, location } ) => {
    let { q = '' } = queryString.parse(location.Search);

    const [searchValue, setSearchValue] = useState({
        searchText: q
    });

    const { searchText } = searchValue;
    q = searchText;

    const handelInputChange = e => {
        setSearchValue( {
            ...searchValue,
            [e.target.name]: e.target.value
        } );
    };

    const handleSearch = e => {
        e.preventDefault();
        history.push(`?q=${searchText}`);
    };

    const res = useFetch(`${baseURL}/search/movie?api_key=${apiKey}&language=es-MX&query=${q}&page=1`, q)

    if ( res.result === undefined || res.result.length === 0) return null;

    return (
        <>
            <Form onSubmit={ handleSearch }>
                <input 
                    type="text"
                    name="searchText"
                    placeholder="Nombre pelicula"
                    autoComplete="off"
                    onChange={ handelInputChange }
                />

                <Button
                    type="submit"
                    round="1rem"
                    margin="0"
                >
                    Buscar
                </Button>
            </Form>

            <SearchList 
                movies={ res.result }
            />
        </>
    );
};
