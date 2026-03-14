import React, { useEffect, useState, useRef } from 'react';


function useSuggestion(query, location) {
    console.log(query);
    const [response, setResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const timerId = useRef(null);
     
    async function getData() {
        try {
            console.log('api called made');
            const apiResponse = await fetch(`${import.meta.env.VITE_SERVER_SIDE_URL}/ad/query/${query}/${location || 'Bhopal'}`);
             const jsonData = await apiResponse.json();
            setResponse(jsonData.ads);
            console.log(jsonData.ads);
            setIsLoading(false);
        } catch (error) {
            setError(error);
        }
    }

    useEffect(() => {
        if (!query) {
            setIsLoading(false);
            return;
        }
        if (timerId.current) {
            clearTimeout(timerId.current);
        }
        timerId.current = setTimeout(() => {
            getData();
        }, 400)


    }, [query, location])
     
    return [response , isLoading, error];

}


export default useSuggestion;