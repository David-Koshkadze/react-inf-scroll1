import { useCallback, useEffect, useRef } from "react";

import UserCard from "./UserCard";

interface CardsProps {
  usersData: any;
  setPageNumber: any;
  loading: boolean;
  error: string | boolean;
}

function Cards({ usersData, setPageNumber, loading, error }: CardsProps) {
  const loader = useRef(null);

  const handleObserver = useCallback(
    (entries: any) => {
      const target = entries[0];
      if (target.isIntersecting) {
        setPageNumber((prev: any) => prev + 1);
      }
    },
    [setPageNumber]
  );

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 1,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-4 grid-rows-1 gap-[10px] ">
      {usersData &&
        usersData.map((user: any) => <UserCard key={user.id} user={user} />)}
      {loading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      {<div ref={loader} />}
    </div>
  );
}

export default Cards;