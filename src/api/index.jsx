import axios from "axios";

const url = " http://localhost:5000";
const API = axios.create({ baseURL: url });

export const signin = (formdata) => API.post("/signin", formdata);
export const signup = (formdata) => API.post("/signup", formdata);
