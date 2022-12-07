import axios from "axios";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  // baseURL: "http://192.168.1.7:3333",
});

export default api;
