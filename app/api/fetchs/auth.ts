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
  // const [token, setToken] = useState("");
  // const login = async (username: string, password: string) => {
  //   try {
  //     const { data } = await httpClient.post("/login", null, {
  //       headers: { Authorization: "Basic " + btoa(username + ":" + password) },
  //     });
  //     setToken(`Bearer ${data}`);
  //     const token = await AsyncStorage.setItem("token", `Bearer ${data.token}`);
  //     console.log(data, token);
  //     return data;
  //     console.log("connectée", username, password);
  //   } catch (error) {
  //     throw new Error((error as Error).message);
  //   }
  // };

  const signup = async (
    datas: Omit<Users, "id" | "role"> & { password: string }
  ) => {
    const { data } = await httpClient.post("/users", datas);
    return data;
  };

  // const logout = async () => {
  //   await AsyncStorage.removeItem("token");
  //   httpClient.defaults.headers.delete.Authorization;
  // };

  return {
    // login,
    signup,
    // logout
  };
};
