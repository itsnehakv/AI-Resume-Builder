import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.RENDER_BASEURL,
});

export default api;
