import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.spacexdata.com/v4",
});

export const fetchData = async (url: string) => {
  return await axiosInstance
    .get(url)
    .then((res) => res)
    .catch((err) => console.log(err));
};
