import axios from "axios";

const API_URL = "http://localhost:3004";

axios.defaults.headers.common["Content-Type"] = "application/json";

const loadTasks = () => {
  return axios.get(API_URL + "/todos");
};

const deleteTask = (data) => {
  return axios.delete(API_URL + "/todos/" + data);
};

const updateTask = (data) => {
  return axios.put(API_URL + "/todos/" + data);
};

const addNewTask = (data) => {
  return axios.post(API_URL + "/todos", data);
};

export default {
  loadTasks,
  deleteTask,
  updateTask,
  addNewTask,
};
