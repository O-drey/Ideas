import { useState, useEffect } from "react";
import axios from "axios";
import { httpClient } from "../httpClient";
import type { Ideas } from "../../libs/interfaces/ideas";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const fetchIdeas = () => {
  const [datas, setData] = useState<Ideas | Ideas[]>([]);
  const [error, setError] = useState<Error | null>(null);

  const fetchDatas = () => {
    try {
      const list = async () => {
        try {
          const { data } = await httpClient.get<Ideas[]>("/subjects");
          setData(data);
          return data;
        } catch (error) {
          setError(error as Error);
          throw new Error((error as Error).message);
        }
      };

      const retrieve = async (id: string) => {
        try {
          const { data } = await httpClient.get<Ideas>(`/subjects/${id}`);
          setData(data);
          return data;
        } catch (error) {
          setError(error as Error);
          throw new Error((error as Error).message);
        }
      };

      const create = async (datas: Omit<Ideas, "id">) => {
        const token = await AsyncStorage.getItem("token");
        try {
          if (token) {
            const { data } = await httpClient.post<Ideas>("/subjects", datas);

            setData(data);

            return data;
          }
          return axios.HttpStatusCode.Forbidden;
        } catch (error) {
          setError(error as Error);
          throw new Error((error as Error).message);
        }
      };
      const update = async (
        id: Ideas["id"],
        datas: Omit<Ideas, "id" | "by_userId">
      ) => {
        const token = await AsyncStorage.getItem("token");
        try {
          if (token) {
            const { data } = await httpClient.patch<Ideas>(
              `/subjects/${id}`,
              datas
            );

            setData(data);

            return data;
          }
          return axios.HttpStatusCode.Forbidden;
        } catch (error) {
          setError(error as Error);
          throw new Error((error as Error).message);
        }
      };
      const del = async (id: Ideas["id"]) => {
        const token = await AsyncStorage.getItem("token");
        try {
          if (!token) axios.HttpStatusCode.Forbidden;

          const { data } = await httpClient.patch<Ideas>(`/subjects/${id}`);

          setData(data);

          return data;
        } catch (error) {
          setError(error as Error);
          throw new Error((error as Error).message);
        }
      };
      return { list, retrieve, create, update, del };
    } catch {
      setError(error);
      throw new Error((error as Error).message);
    } finally {
    }
  };

  return { datas, error, fetchDatas };
};
