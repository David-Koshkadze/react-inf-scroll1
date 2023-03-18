import { useState, useEffect, useCallback } from "react";

import axios from "axios";

const URL = "http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com";

export function useFetch(query: string) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(false);
  const [list, setList] = useState<any[]>([]);

  const sendQuery = useCallback(
    async (q: string) => {
      try {
        setLoading(true);
        setError(false);
        const res = await axios.get(URL + q);
        console.log("Response: ", res);
        setList((prev) => [...prev, res.data]);
        console.log("List: ", list);
        setLoading(false);
      } catch (err) {
        setError(err);
      }
    },
    [query]
  );

  useEffect(() => {
    sendQuery(query);
  }, [query, sendQuery]);

  return { loading, error, list };
}
