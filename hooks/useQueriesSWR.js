import useSWR from "swr";

export const useQueriesSWR = ({ prefixUrl = "" } = {}) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(prefixUrl, fetcher);

  return {
    data: data || null,
    isLoading,
    error: error || false,
  };
};
