import { useState, useEffect } from "react";
import axios from "axios";
import {API_KEY} from "@env"


const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const [error, setError] = useState(null);
    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {
            ...query
        },
        headers: {
            'X-RapidAPI-Key': "58bdc0362dmsh5d55957466c2a72p139dddjsn5a5e622f51af",
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };
    const fetchData = async () => {
        setisLoading(true);
        try {
            const response = await axios.request(options);
            setData(response.data.data)
            
            setisLoading(false);
        } catch (error) {
            setError(error)
            alert('There is something wrong')
        } finally {
            setisLoading(false)

        }
    }
    useEffect(() => {
        fetchData();
    }, [])

    // const reFetch = () => {
    //     fetchData();
    //     setisLoading(true);
    // }
    return { data, isLoading, error }
}

export default useFetch