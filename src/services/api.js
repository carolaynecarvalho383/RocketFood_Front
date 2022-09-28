import axios from "axios";
const apiURL = import.meta.env.VITE_BASE_URL_API

console.log(apiURL);
export const api = axios.create({
  baseURL:apiURL
})

