import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
    api_key: 'f83854a9f07b692049f953a5cb8c1e39',
    language: 'en-US',
    },
});

export async function getMovieCast(id) {
    const query = `/movie/${id}/credits`;
    try {
    const { data } = await instance.get(query);
    return data;
    } catch (error) {
    throw error;
    }
}

export async function searchMovie(queryString) {
    const query = `/search/movie?query=${queryString}`;
    try {
    const { data } = await instance.get(query);
    return data;
    } catch (error) {
    throw error;
    }
}