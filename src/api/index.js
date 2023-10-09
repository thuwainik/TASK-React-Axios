import axios from "axios";

const instance = axios.create({
  baseURL: "https://pets-react-query-backen.herokuapp.com",
});

export default instance;
