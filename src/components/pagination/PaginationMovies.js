import React from 'react';

import Pagination from 'rc-pagination';

import { ContainerPagination } from '../../styles/components/pagination/paginationStyled';

export const PaginationMovies = ( { page, totalResults, onChangePage } ) => {

    return (
        <ContainerPagination>
            <Pagination 
                className="pagination"
                current={ page }
                total={ totalResults }
                pageSize={ 20 }
                onChange={ onChangePage }
            />
        </ContainerPagination>
    );
};