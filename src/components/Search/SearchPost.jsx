import { TextField } from "@mui/material";
import React from "react";
import { useDebounce } from "../../../hooks/useDebounce";
import useFetch from "../../../hooks/useFetch";
import { SEARCH } from "../../../urls";

export const SearchPost = () => {
  const [val, setVal] = React.useState("");

  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(SEARCH + debouncedUpdateVal, options);
        const json = await res.json();
        setResponse(json);
        console.log(response);
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
  }, [debouncedUpdateVal]);

  if (loading) {
    return <Loader />;
  }

  return (
    <TextField
      className="w-full"
      id="search posts"
      label="Search Posts"
      variant="outlined"
      onChange={(e) => setVal(e.target.value)}
      value={val}
    />
    {
        response && <h3>{response?.data?.children?.title}</h3>
    }
  );
};
