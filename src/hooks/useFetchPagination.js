import { useEffect, useState } from 'react';

export const useFetchPagination = ( url, currentPage) => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(currentPage)

    useEffect( () => {
        const consultApi = async () => {
            try {
                const res = await fetch( url );
                const data = await res.json();
                setMovies( data );
                setPage( page )
            } catch (error) {
                console.log( error );
            };
        };
        
        consultApi();
    }, [ url, page ]);

    return [ movies ];
};
