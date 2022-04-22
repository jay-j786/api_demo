import axios from 'axios';

const base_url = 'https://jsonplaceholder.typicode.com/posts/1/comments';
export const getPosts = async () => {
  return await axios.get(base_url);
};

export const setPosts = async body => {
  return await axios.post(base_url, body);
};
