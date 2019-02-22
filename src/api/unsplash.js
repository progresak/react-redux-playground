import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID a78a0744040acb5dc213e38e516aa2fad1ed23f601e2d288e5a920769ce6fcb3'
    }
});