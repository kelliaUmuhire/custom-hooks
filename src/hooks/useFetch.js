import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => (setData(data), setLoading(false)))
      .catch((err) => setError(err.message));
  }, [url]);

  return [data, loading, error];
};

export default useFetch;
