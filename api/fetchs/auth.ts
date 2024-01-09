import { httpClient } from "../httpClient";
import { Users } from "../../libs/interfaces/users";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// import base64 from "react-native-base64";

// const authHeader = "Basic " + base64.encode(`${username}:${password}`);
// const response = axios.post(
//   LOGIN_ENDPOINT,
//   {},
//   {
//     headers: { Authorization: authHeader },
//   }
// );

export const useAuth = () => {
  const [token, setToken] = useState("");
  const [error, setError] = useState<Error | null>(null);
  const login = async (username: string, password: string) => {
    try {
      const { data } = await httpClient.post("/login", null, {
        headers: { Authorization: "Basic " + btoa(username + ":" + password) },
      });
      setToken(`Bearer ${data}`);
      const token = await AsyncStorage.setItem("token", `Bearer ${data.token}`);
      console.log(data, token);
      return data;
    } catch (error) {
      setError(error as Error);
      throw new Error((error as Error).message);
    }
  };

  const signup = async (
    datas: Omit<Users, "id" | "role"> & { password: string }
  ) => {
    try {
      const { data } = await httpClient.post("/users", datas);
      return data;
    } catch (error) {
      setError(error as Error);
      throw new Error((error as Error).message);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem("token");
      httpClient.defaults.headers.delete.Authorization;
    } catch (error) {
      setError(error as Error);
      throw new Error((error as Error).message);
    }
  };

  return {
    login,
    signup,
    logout,
  };
};
