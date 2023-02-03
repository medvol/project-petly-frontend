import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

// Utility to add JWT
const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

/*
 * POST @ /users/signup
 * body: { name, email, password }
 */
export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/auth/register", credentials);
      // After successful registration, add the token to the HTTP header
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      const {
        response: { status },
      } = error;
      return thunkAPI.rejectWithValue(status);
    }
  }
);

/*
 * POST @ /users/login
 * body: { email, password }
 */
export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/auth/login", credentials);
      // After successful login, add the token to the HTTP header
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      const {
        response: { status },
      } = error;
      return thunkAPI.rejectWithValue(status);
    }
  }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/auth/logout");
    // After a successful logout, remove the token from the HTTP header
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(persistedToken);
      const res = await axios.get("/auth/current");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const authGoogle = createAsyncThunk(
  "auth/google",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("/auth/google");
      console.log(res);
      return res;
    } catch (error) {
      console.log(error);
    }
  }
);

const authOperation = { register, logIn, logOut, refreshUser, authGoogle };

export default authOperation;
