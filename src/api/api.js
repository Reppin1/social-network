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
  follow(userID) {
    return instance.post(`follow/${userID}`).then((response) => response.data);
  },
  unfollow(userID) {
    return instance.delete(`follow/${userID}`).then((response) => response.data);
  },
};

export const authAPI = {
  auth() {
    return instance.get('auth/me').then((response) => response.data);
  },
  login(email, password, rememberMe = false) {
    return instance.post('/auth/login', { email, password, rememberMe }).then((response) => response.data);
  },
  logout() {
    return instance.delete('/auth/login').then((response) => response.data);
  },
};

export const statusAPI = {
  getStatus(userID) {
    return instance.get(`profile/status/${userID}`);
  },
  updateStatus(status) {
    return instance.put('profile/status', { status });
  },
};
