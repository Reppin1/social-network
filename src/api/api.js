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
    return instance.get(`users?page=${currentPage}&count=${pageSize}`);
  },
  getOneUser(userID) {
    return instance.get(`profile/${userID}`)
      .then((response) => response);
  },
  follow(userID) {
    return instance.post(`follow/${userID}`);
  },
  unfollow(userID) {
    return instance.delete(`follow/${userID}`);
  },
};

export const authAPI = {
  auth() {
    return instance.get('auth/me').then((response) => response.data);
  },
  login(email, password, rememberMe = false, captcha) {
    return instance.post('/auth/login', {
      email, password, rememberMe, captcha,
    });
  },
  logout() {
    return instance.delete('/auth/login');
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

export const captchaAPI = {
  getCaptcha() {
    return instance.get('/security/get-captcha-url');
  },
};
