import axios from 'axios';

export const fetchPosts = async () => {
  return axios.get('/src/apis/data.json')
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error("네트워크 오류", error);
    });
};