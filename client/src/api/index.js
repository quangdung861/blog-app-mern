import axios from 'axios';

const URL = process.env.API;

export const fetchPosts = () => axios.get(`${URL}/posts`);
export const createPost = (payload) => axios.post(`${URL}/posts`, payload);
export const updatePost = (payload) => axios.patch(`${URL}/posts/update`, payload);
