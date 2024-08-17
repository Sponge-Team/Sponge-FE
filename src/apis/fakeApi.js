import axios from 'axios';

export const fetchProbelmPosts = async () => {
  return axios.get('/src/apis/probelmData.json')
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error("네트워크 오류", error);
    });
};

export const fetchUserById = async (id) => {
  return axios.get('/src/apis/userData.json')
    .then(response => {
      const user = response.data.find(user => user.id === id);
      return user || null;
    })
    .catch(error => {
      console.error("네트워크 오류", error);
    });
};

export const fetchDogsByUserId = async (userId) => {
  return axios.get('/src/apis/dogData.json')
    .then(response => {
      const userDogs = response.data.filter(dog => dog.user_id === userId);
      return userDogs;
    })
    .catch(error => {
      console.error("네트워크 오류", error);
    });
};