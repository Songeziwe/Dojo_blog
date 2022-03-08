import { useState, useEffect } from "react";

// Custom Hook
const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const abortController = new AbortController();
        const signal = abortController.signal;

        setIsPending(true);
        
            fetch(url, { signal })
                .then((response) => {
                    if(!response.ok)
                        throw Error('Could not fetch the data for that resource.');
                    return response.json();
                })
                .then((data) => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch((error) => {
                    if(error.name === 'AbortError'){
                        console.log('fetch Aborted');
                    }else{
                        setError(error.message);
                        setIsPending(false);
                    }
                    
                });
        
        // Cleanup
        return () => abortController.abort();

    }, [url]);

    return {data, isPending, error};
}

export default useFetch;