import axios from "axios";

// const URL = process.env.REACT_APP_URL;
const URL = "http://localhost:8081/signup";

let axiosConfig = {
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials:true
};

export async function signUp(data: UserType): Promise<UserType> {
  const response: UserType = await axios.post(`${URL}`, data,axiosConfig);

  return response;
}
