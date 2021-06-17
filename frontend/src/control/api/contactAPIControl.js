import axios from "axios";

const { REACT_APP_API_HOST, REACT_APP_API_PORT, REACT_APP_API_KEY } = process.env;

const apiHttp = axios.create({
  baseURL: `http://${REACT_APP_API_HOST}:${REACT_APP_API_PORT}/api`,
  headers: {
    "Content-type": "application/json",
    "api_key" : REACT_APP_API_KEY
  }
});

const getAll = () => {
  return apiHttp.get("/contact");
}

const get = (id) => {
  return apiHttp.get(`/contact/${id}`);
}

const create = (data) => {
  return apiHttp.post("/contact", data);
}

const update = (id, data) => {
  return apiHttp.put(`/contact/${id}`, data);
}

const destroy = (id) => {
  return apiHttp.delete(`/contact/${id}`);
}

export {
  getAll, get, create, update, destroy
};