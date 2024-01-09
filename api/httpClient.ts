import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
// import { EXPO_URL } from "@env";
// const EXPO_URL = process.env.EXPO_URL;

const EXPO_URL = process.env.EXPO_URL;
console.log("EXPO_URL", EXPO_URL);
export const httpClient = axios.create({
  baseURL: EXPO_URL,
  headers: { Accept: "application/json", "Content-Type": "application/json" },
  timeout: 10000,
  withCredentials: true,
});

export const getToken = async () => {
  const token = await AsyncStorage.getItem("token");
  if (token)
    httpClient.defaults.headers.common.Authorization = `Bearer ${token}`;
  return token;
};
