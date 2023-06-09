import { useState, useEffect, useCallback } from "react";
import axios from "axios";

interface UseFetchTypes {
  loading: boolean;
  error: boolean | string;
  list: any[];
}

function useFetch(page: number, size: number, userId?: string): UseFetchTypes {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean>(false);
  const [list, setList] = useState<any[]>([]);

  const BASE_URL = `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com`;

  let CUSTOM_URL: string;

  if (page && !userId && size) {
    CUSTOM_URL = `${BASE_URL}/user/${page}/${size}`;
  } else if (!page && userId && !size) {
    CUSTOM_URL = `${BASE_URL}${userId}`;
  } else if (page && userId && size) {
    CUSTOM_URL = `${BASE_URL}${userId}/friends/${page}/${size}`;
  } else {
    CUSTOM_URL = `${BASE_URL}/user/${page}/10`;
  }

  const sendQuery = useCallback(async () => {
    try {
      setLoading(true);
      setError(false);
      await axios.get(CUSTOM_URL).then((res) => {
        setList((prev) => [...prev, ...res.data.list]);
        setLoading(false);
      });
    } catch (err: any) {
      setError(err);
      setLoading(false);
    }
  }, [CUSTOM_URL]);

  useEffect(() => {
    sendQuery();
  }, [sendQuery, page, userId]);

  return { loading, error, list };
}

export default useFetch;
