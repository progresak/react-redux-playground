import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';


const SongsAppContainer = () => {
    return (
        <Provider store={createStore(reducers)}>
            <App />
        </Provider>
    );
};

export default SongsAppContainer;