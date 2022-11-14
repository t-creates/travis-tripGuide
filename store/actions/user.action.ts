import { createAsyncThunk } from "@reduxjs/toolkit";
import { signIn } from 'next-auth/react'
import axios from "axios";

import { errorGlobal, successGlobal } from "../reducers/notifications.reducer";

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async ({values, router}, {dispatch}) => {
    try {
      const user = await axios.post("/api/auth/register", values);
      
      // Sign in credentials
      await signIn('credentials', {
        redirect: false,
        email: user.data.email,
        password: values.password,
      });

      dispatch(successGlobal("Welcome !!!"));
      router.push("/users/dashboard");

      return user.data;
    }
    catch (error) {
      dispatch(errorGlobal(error.response.data.message));
      console.log(error.response.data.message);
      throw error;
    }
  }
);

export const signInUser = createAsyncThunk(
  "user/signInUser",
  async ({values, router}, {dispatch}) => {
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email: values.email,
        password: values.password,
      });
      // console.log(result);
      if (result.error) {
        dispatch(errorGlobal(result.error));
        throw result.error;
      }

      // Get Rest of user data
      const user = await axios.get("/api/users/user");
      //console.log(user.data);
      dispatch(successGlobal("Welcome !!!"));
      router.push("/users/dashboard");

      return user.data;
    }
    catch (error) {
      console.log(error);
      dispatch(errorGlobal(error.response.data.message));
      throw error;
    }
  }
);

export const autoSignIn = createAsyncThunk(
  "user/autoSignIn",
  async (obj,{dispatch}) => {
    try {
      const user = await axios.get("/api/users/user");
      return user.data;
    }
    catch (error) {
      console.log(error);
      dispatch(errorGlobal(error.response.data.message));
      throw error;
    }
  }
);

