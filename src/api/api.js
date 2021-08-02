import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'cde828f9-160b-4d38-861b-499d5b0892e3',
  },
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response);
  },
  getOneUser(userID) {
    return instance.get(`profile/${userID}`)
      .then((response) => response);
  },
  auth() {
    return instance.get('auth/me').then((response) => response.data);
  },
  follow(userID) {
    return instance.post(`follow/${userID}`).then((response) => response.data);
  },
  unfollow(userID) {
    return instance.delete(`follow/${userID}`).then((response) => response.data);
  },
};
