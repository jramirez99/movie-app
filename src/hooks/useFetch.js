import { useEffect, useState } from 'react';

export const useFetch = ( url, options ) => {

    const [loading, setLoading] = useState( true )
    const [result, setResult] = useState( [] );
    
    useEffect( () => {
        const consularApi = async () => {
            try {
                const res = await fetch( url );
                const data = await res.json();        
                setResult( data );
                setLoading( false );
            } catch (error) {
                console.log(error);
                setLoading( false );
            }
        };
        consularApi();
    }, [url, options]);

    return { result, loading };
};
