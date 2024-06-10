import axios from "axios";

const baseURL = "http://localhost:3000";
// const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const axiosClient = axios.create({
  baseURL: baseURL,
  timeout: 15000,
  headers: {},
});

axiosClient.interceptors.request.use(function (config) {
  config.url = config.url;
  return config;
});
// console.log(process.env.AUTH_URL);

export { axiosClient };
