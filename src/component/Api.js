import axios from "axios";

export const lai = axios.create({baseURL: "http://localhost:3001/api/v1", headers: {"Content-Type": "application/json"}})