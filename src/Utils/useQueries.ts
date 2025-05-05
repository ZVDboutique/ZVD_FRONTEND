/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  UseMutationOptions,
  useMutation as useMutationQuery,
  useQuery,
} from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axiosInstance from "./axios";

interface PropsState {
  route: string;
  requestBody?: any;
  key: any[];
  retry?: number | boolean;
  success?: any;
  keepPreviousData?: boolean;
  staleTime?: any;
  enabled?: boolean;
  refetchOnWindowFocus?: boolean;
  cacheTime?: any;
  networkMode?: any;
  headers?: any;
}

export const useFetchQuery = <T = any>(props: PropsState) => {
  const {
    requestBody,
    route,
    key,
    retry,
    success,
    keepPreviousData = false,
    enabled,
    staleTime,
    cacheTime,
    networkMode,
    headers,
  } = props;

  const navigate = useNavigate();

  return useQuery<T>({
    queryKey: key,
    retry: retry || false,
    queryFn: () =>
      axiosInstance.get(route, {
        params: requestBody,
        headers: headers,
      }),
    enabled: enabled,
    staleTime: staleTime || 0,
    cacheTime: cacheTime || 0,
    keepPreviousData: keepPreviousData || false,
    networkMode: networkMode,
    onSuccess: (data) => success && success(data),
    onError: (error: any) => {
      if (error?.response?.status === 444) {
        navigate("/app/access-denied", { replace: true });
      }
    },
  });
};

interface MutationProps<TData = unknown, TVariables = unknown, TError = unknown>
  extends UseMutationOptions<TData, TError, TVariables> {
  mutationFn: (variables?: TVariables) => Promise<TData>;
}

export const useMutation = <
  TData = unknown,
  TVariables = unknown,
  TError = unknown,
>(
  props: MutationProps<TData, TVariables, TError>,
) => {
  const { onSuccess, onError } = props;

  return useMutationQuery<TData, TError, TVariables>({
    ...props,
    onSuccess: (response: any, a, t) => {
      if (onSuccess) {
        onSuccess(response, a, t);
      }
      toast.success(
        response?.data?.message || "Action Performed Successfully.",
      );
    },
    onError: (err: any, a, t) => {
      if (onError) {
        onError(err, a, t);
      }
      toast.error(
        err?.response?.data?.message ||
          "Something went wrong, please try again.",
      );
    },
  });
};
