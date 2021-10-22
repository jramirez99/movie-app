import { useEffect, useState } from 'react';

export const useFetch = ( url ) => {

    const [result, setResult] = useState( [] );
    
    useEffect( () => {
        const consularApi = async () => {
            try {
                const res = await fetch( url );
                const data = await res.json();        
                setResult( data );
            } catch (error) {
                console.log(error);
            }
        };
        consularApi();
    }, [url]);

    return { result };
};
