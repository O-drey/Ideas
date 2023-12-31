import { useState, useEffect } from "react";
import axios from "axios";
import { httpClient } from "../httpClient";
import type { Ideas } from "../../libs/interfaces/ideas";

export const fetchIdeas = () => {
  const [datas, setData] = useState<Ideas | Ideas[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const fetchDatas = async () => {
    setIsLoading(true);
    try {
      const list = async () => {
        const { data } = await httpClient.get<Ideas[]>("/subjects");
        setData(data);
        setIsLoading(false);
        return data;
      };

      const retrieve = async (id: string) => {
        const { data } = await httpClient.get<Ideas>(`/subjects/${id}`);
        setData(data);
        setIsLoading(false);
        return data;
      };

      const create = async (datas: Omit<Ideas, "id">) => {
        const token = localStorage.getItem("token");
        try {
          if (token) {
            const { data } = await httpClient.post<Ideas>("/subjects", datas);

            setData(data);
            setIsLoading(false);

            return data;
          }
          return axios.HttpStatusCode.Forbidden;
        } catch (error) {
          throw new Error((error as Error).message);
        }
      };
      const update = async (
        id: Ideas["id"],
        datas: Omit<Ideas, "id" | "by_userId">
      ) => {
        const token = localStorage.getItem("token");
        try {
          if (token) {
            const { data } = await httpClient.patch<Ideas>(
              `/subjects/${id}`,
              datas
            );

            setData(data);
            setIsLoading(false);

            return data;
          }
          return axios.HttpStatusCode.Forbidden;
        } catch (error) {
          throw new Error((error as Error).message);
        }
      };
      const del = async (id: Ideas["id"]) => {
        const token = localStorage.getItem("token");
        try {
          if (!token) axios.HttpStatusCode.Forbidden;

          const { data } = await httpClient.patch<Ideas>(`/subjects/${id}`);

          setData(data);
          setIsLoading(false);

          return data;
        } catch (error) {
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

  return { datas, isLoading, error, fetchDatas };
};
