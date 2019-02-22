import axios from 'axios';

const KEY = 'AIzaSyA_s05OT6Hvw2eJHxTT-rADreJKNVrsHnA';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,

    }
})