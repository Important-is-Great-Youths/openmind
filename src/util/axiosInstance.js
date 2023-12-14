import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://openmind-api.vercel.app/2-3/",
});
