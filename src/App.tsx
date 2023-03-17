import { useEffect, useState, useRef, useCallback } from "react";
import { useFetch } from "./useFetch";

// const URL = "http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com";

function App() {
  // const [query, setQuery] = useState<string>("");

  const [page, setPage] = useState<number>(1);

  const query = `/user/${page}/15`

  const { loading, error, list } = useFetch(query, page);

  const loader = useRef(null);

  const handleObserver = useCallback((entries: any) => {
    const target = entries[0];
    if (target.isInteracting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(handleObserver, option);

    if (loader.current) {
      observer.observe(loader.current);
    }
  }, [handleObserver]);

  return (
    <div>
      <h1>Infinite Scroll</h1>
      <h2></h2>
      {list.map((item, i) => {
        <div key={i}>{item.name}User</div>;
      })}
      {loading && <div>Loading...</div>}
      {error && <div>Error</div>}
      <div ref={loader}></div>
    </div>
  );
}

export default App;
