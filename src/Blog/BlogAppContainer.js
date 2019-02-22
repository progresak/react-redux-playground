import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './components/App';
import reducers from './reducers';


const BlogAppContainer = () => {
    return (
        <Provider store={createStore(reducers, applyMiddleware(thunk))}>
            <App />
        </Provider>
    );
};

export default BlogAppContainer;