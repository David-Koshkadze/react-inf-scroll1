import { useState } from "react";
import Cards from "../components/Cards";
import useFetch from "../hooks/useFetch";

function Home() {
  const [pageNumber, setPageNumber] = useState(1);
  const { loading, error, list } = useFetch(pageNumber, 20);

  return (
    <div className="max-w-[1200px] p-3 m-auto">
      {list && (
        <Cards
          usersData={list}
          setPageNumber={setPageNumber}
          loading={loading}
          error={error}
        />
      )}
    </div>
  );
}

export default Home;
