import { useState, useEffect } from "react";

const initialOptions = {
  method: "GET",
  mode: "cors",
  cache: "no-cache",
  credentials: "same-origin",
  headers: {
    "Content-Type": "application/json",
  },
  redirect: "follow",
  referrerPolicy: "no-referrer",
  // body: JSON.stringify(data) // body data type must match "Content-Type" header
};

export default function useFetch(url, options = initialOptions) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    let componentMounted = true;
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(url, options);
        const json = await res.json();
        if (componentMounted) {
          setResponse(json);
        }
      } catch (err) {
        setLoading(false);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    return () => {
      componentMounted = false;
    };
  }, []);
  return { response, error, loading };
}
