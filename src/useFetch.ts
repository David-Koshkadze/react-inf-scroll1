import { useState, useEffect, useCallback } from "react";

import axios from "axios";

const URL = "http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com";

function useFetch(query: string, page: number) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(false);
  const [list, setList] = useState<any[]>([]);

  const sendQuery = useCallback(async () => {
    try {
      setLoading(true);
      setError(false);
      const res = await axios.get(URL);
      setList((prev) => [...prev, ...res.data]);
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  }, [query, page]);

  useEffect(() => {
    sendQuery(query);
  }, [query, sendQuery, page]);

  return { loading, error, list };
}
