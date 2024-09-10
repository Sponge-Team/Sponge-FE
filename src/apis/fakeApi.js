import axios from 'axios';

export const fetchProblemPosts = async (userId) => {
  return axios.get('/src/apis/problemData.json')
    .then(response => {
      const data = response.data;
      if (userId) {
        return data.filter(post => post.userId === userId);
      }
      return data;
    })
    .catch(error => {
      console.error("네트워크 오류", error);
    });
};

export const fetchUserById = async (userId) => {
  return axios.get('/src/apis/userData.json')
    .then(response => {
      const user = response.data.find(user => user.userId === userId);
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

export const fetchCsePosts = async () => {
  return axios.get('/src/apis/caseData.json')
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error("네트워크 오류", error);
    });
};

export const fetchProblemCode = async () => {
  return axios.get('/src/apis/problemCodeData.json')
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error("네트워크 오류", error);
    });
};

export const fetchAnswerPosts = async () => {
  return axios.get('/src/apis/answerData.json')
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error("네트워크 오류", error);
    });
};