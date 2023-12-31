import { useState, useEffect } from "react";
import axios from "axios";
import { httpClient } from "../httpClient";
import { Users } from "../../libs/interfaces/users";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const fetchUsers = () => {
  const [datas, setData] = useState<Users | Users[]>([]);
  const [error, setError] = useState(null);

  const fetchDatas = async () => {
    try {
      const list = async () => {
        const { data } = await httpClient.get<Users[]>("/users");
        setData(data);

        return data;
      };

      const retrieve = async (id: string) => {
        const { data } = await httpClient.get<Users>(`/users/${id}`);
        setData(data);

        return data;
      };

      const update = async (id: Users["id"], datas: Omit<Users, "id">) => {
        const token = await AsyncStorage.getItem("token");
        try {
          if (!token) axios.HttpStatusCode.Forbidden;

          const { data } = await httpClient.patch<Users>(`/users/${id}`, datas);

          setData(data);

          return data;
        } catch (error) {
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
          throw new Error((error as Error).message);
        }
      };
      return { list, retrieve, update, del };
    } catch {
      setError(error);
      throw new Error((error as Error).message);
    } finally {
    }
  };

  return { datas, error, fetchDatas };
};
