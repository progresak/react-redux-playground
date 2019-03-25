import {useState, useEffect} from 'react';

const useLocation = () => {

    const [lat, setLat] = useState(null);
    const [errorMessage, setError] = useState('');

    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition(
            position => setLat(position.coords.latitude),
            err => setError(err.message)
        )
    }, []); // [] = only one time call in total

    return {lat, errorMessage}; // not good, cause in changes could make troubles, better send in object
};

export default useLocation;