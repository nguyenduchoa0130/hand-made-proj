import axios from 'axios';

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
});

axiosClient.interceptors.request.use(
  (config) => {
    // Get the token from wherever you store it (e.g., localStorage, cookies)
    const token = JSON.parse(localStorage.getItem('user'));

    // If a token exists, add it to the headers
    if (token.access_token) {
      config.headers["x-access-token"] = token.access_token;
      console.log(token.access_token,"abcd")
    }

    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
); export default axiosClient;


