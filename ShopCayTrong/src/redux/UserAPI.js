import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosInstance from "../helper/AxiosInstance";

export const login = createAsyncThunk(// trả ra 1 action name 
    "user/login", 
    async (data, { rejectWithValue }) => {
        try {
            //http://192.168.1.202:8080/
            const response = await AxiosInstance().post(`/users/login`, data);
            console.log('>>>> login response: ', response);
            const result = response.data;
            return result;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const register = createAsyncThunk(
    "user/register",
    async (data, { rejectWithValue }) => {
        try {
            //http://192.168.1.202:8080/
            const response = await AxiosInstance().post(`/users/register`, data);
            console.log('>>>> register response: ', response);
            const result = response.data;
            return result;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
