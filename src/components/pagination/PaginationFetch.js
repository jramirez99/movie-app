import React, { useState } from 'react';

import { baseURL, apiKey } from '../../config/api';
import { CatalogList } from '../movieCatalog/CatalogList';
import { PaginationMovies } from './PaginationMovies';
import { useFetchPagination } from '../../hooks/useFetchPagination';

export const PaginationFetch = ( { route } ) => {
    const [currentPage, setcurrentPage] = useState(1)

    const res = useFetchPagination(`${baseURL}/movie/${route}?api_key=${apiKey}&language=es-MX&page=${currentPage}`, currentPage);

    const movies = res;
    const { page, total_pages, total_results } = movies[0];

    const onChangePage = currentPage => {
        setcurrentPage( currentPage );
    };

    return (
        <>
            <CatalogList 
                movies={ movies }
            />

            <PaginationMovies 
                page={ page }
                totalPages={ total_pages }
                totalResults={ total_results }
                onChangePage={ onChangePage }
            />
        </>
    );
};
