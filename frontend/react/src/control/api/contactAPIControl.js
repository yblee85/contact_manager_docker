import axios from "axios";

const apiHttp = axios.create({
  baseURL: `/api`,
  headers: {
    "Content-type": "application/json"
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