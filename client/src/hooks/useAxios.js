import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

function useAxios() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = async (url, method = 'get', headers = {}, body = null, params = {}) => {
        try {          
            if (body) headers['Content-Type'] = 'application/json';

            const response = await axios({
                url: 'http://localhost:5000/api/' + url,
                data: body,
                method, 
                headers, 
                params
            });

            console.log(response);
            return response;
        } catch (e) {
            
        }
    };

    return { request };
}

export default useAxios();