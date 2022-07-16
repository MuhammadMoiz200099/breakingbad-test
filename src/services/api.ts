import axios from "axios";
import { config } from '../config/config';

const defaultClient = axios.create({
  baseURL: config.BASE_URL,
  timeout: 10000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});


const clients = {
  default: {
    client: defaultClient,
  }
};

/** Middleware to extract API error details from response */
export const thunkHandler = async (asyncFn: any, thunkAPI: any) => {
  try {
    const response = await asyncFn;
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response);
  }
};

export default clients;
