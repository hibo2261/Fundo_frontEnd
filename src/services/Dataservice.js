import axios from "axios";
const baseURL = "http://localhost:5000/api/v1";

const headerConfig = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};

export const getNotes = async () => {
  try {
    let response = await axios.get(`${baseURL}/notes`, headerConfig);
    console.log(response);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const postNote = async (obj) => {
  try {
    let response = await axios.post(`${baseURL}/notes`, obj, headerConfig);
    console.log(response);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateColor = async (obj, id) => {
  try {
    let response = await axios.put(`${baseURL}/notes/${id}`, obj, headerConfig);
    console.log(response);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateArchive = async (a, b) => {
  try {
    let response = await axios.put(
      `${baseURL}/notes/${a}/archive`,
      b,
      headerConfig
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const updateDelete = async (a) => {
  try {
    let response = await axios.delete(`${baseURL}/notes/${a}`, headerConfig);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const updateNote = async (id, obj) => {
  try {
    let response = await axios.put(`${baseURL}/notes/${id}`, obj, headerConfig);
    return response;
  } catch (error) {
    console.log(error);
  }
};
