import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

export const getUsers = async () => {
  const result = await axios.get("/users");
  return result.data;
};
