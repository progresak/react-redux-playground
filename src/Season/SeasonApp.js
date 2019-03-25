import React from 'react';
import SeassionDisplay from './SessionDisplay'
import Spinner from './Spinner'
import useLocation from "./useLocation";



const SeasonApp = () => {
    const location = useLocation();
    const errorMessage = location.errorMessage;
    const lat = location.lat;

    let content;
    if (errorMessage) {
        content = <div>Error: {errorMessage}</div>;
    } else if (lat) {
        content = <SeassionDisplay lat={lat}/>;
    } else {
        content = <Spinner message={'Please accept location request'}/>;
    }
    return (
        <div className={'border red'}>
            {content}
        </div>
    );
};

export default SeasonApp;