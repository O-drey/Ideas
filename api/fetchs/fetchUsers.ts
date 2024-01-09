import { useState, useEffect } from "react";
import axios from "axios";
import { httpClient } from "../httpClient";
import { Users } from "../../libs/interfaces/users";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const fetchUsers = () => {
  const [datas, setData] = useState<Users | Users[]>([]);
  const [error, setError] = useState<Error | null>(null);

  const fetchDatas = () => {
    try {
      const list = async () => {
        try {
          const { data } = await httpClient.get<Users[]>("/users");
          setData(data);

          return data;
        } catch (error) {
          setError(error as Error);
          throw new Error((error as Error).message);
        }
      };

      const retrieve = async (id: string) => {
        try {
          const { data } = await httpClient.get<Users>(`/users/${id}`);
          setData(data);

          return data;
        } catch (error) {
          setError(error as Error);
          throw new Error((error as Error).message);
        }
      };

      const update = async (id: Users["id"], datas: Omit<Users, "id">) => {
        const token = await AsyncStorage.getItem("token");
        try {
          if (!token) axios.HttpStatusCode.Forbidden;

          const { data } = await httpClient.patch<Users>(`/users/${id}`, datas);
          setData(data);

          return data;
        } catch (error) {
          setError(error as Error);
          throw new Error((error as Error).message);
        }
      };
      const del = async (id: Users["id"]) => {
        const token = await AsyncStorage.getItem("token");
        try {
          if (!token) axios.HttpStatusCode.Forbidden;

          const { data } = await httpClient.patch<Users>(`/users/${id}`);
          setData(data);

          return data;
        } catch (error) {
          setError(error as Error);
          throw new Error((error as Error).message);
        }
      };
      return { list, retrieve, update, del };
    } catch (error) {
      setError(error as Error);
      throw new Error((error as Error).message);
    }
  };

  return { datas, error, fetchDatas };
};
