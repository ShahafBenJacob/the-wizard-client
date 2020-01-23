import axios from "axios";

export const getData = async type => {
  try {
    const response = await axios.get(`/${type}`);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const postData = async (type, data) => {
  try {
    const response = await axios.post(`http://localhost:3000/${type}`, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateData = async (type, data) => {
  try {
    const response = await axios.put(`http://localhost:3000/${type}`, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};