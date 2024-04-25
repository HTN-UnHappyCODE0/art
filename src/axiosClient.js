import axios from "axios";

// const axiosClient = axios.create({
//   baseURl: import.meta.env.VITE_API_BASE_URL,
// });



//https://localhost:60437/api/product


const axiosClient = axios.create({
  baseURL: 'http://localhost:5081/api/',
});

export default axiosClient;
