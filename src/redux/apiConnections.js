import axios from 'axios';

// instance - URL - без токена
export const publicApiConnections = axios.create({
  baseURL: 'https://connections-api.goit.global/',
});

// instance - URL - с токеном
export const privateApiConnections = axios.create({
  baseURL: 'https://connections-api.goit.global/',
});

//  Запись/удаление token для всех последующих операций
const token = {
  set(token) {
    privateApiConnections.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    privateApiConnections.defaults.headers.common.Authorization = '';
  },
};

export const { set, unset } = token;
