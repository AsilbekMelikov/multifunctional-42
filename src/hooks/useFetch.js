import { useCallback } from "react";

const useFetch = () => {
  const request = useCallback(
    async (
      url,
      method = "GET",
      body = null,
      headers = { "Content-type": "application/json" }
    ) => {
      const response = await fetch(url, { method, body, headers });
      try {
        if (!response.ok) {
          throw new Error(
            `Could not fetch ${url} and status is ${response.status}`
          );
        }
        const data = await response.json();
        return data;
      } catch (e) {
        console.log(e);
      }
    },
    []
  );
  return { request };
};
export default useFetch;
