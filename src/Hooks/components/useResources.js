import {useEffect, useState} from 'react';
import axios from "axios";

const useResources = (resource) => {
    const [resources, setResources] = useState([]);


    const fetchResource = async (resource) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
        setResources(response.data);
    };

    useEffect(() => {
        fetchResource(resource);
    }, [resource]);
    // check if props changed, if so, call request, otherwise NO.
    // if not filled, recursive call....
    // if filed empty arr -> no call at all
    // {a:10} => {a:10} will be called (its new object)
    // [1,2] => [1,2] NOT will be called (same array)

    return resources;
};

export default useResources;
