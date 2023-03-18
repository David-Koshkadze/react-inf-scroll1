import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import useFetch from "../hooks/useFetch";

import { UsersHistoryContext } from "../context/usersHistory";
import Cards from "../components/Cards";
import UserInfo from "../components/UserInfo";

function User() {
  const { pathname } = useLocation();
  const { usersHistory } = useContext(UsersHistoryContext);

  const [pageNumber, setPageNumber] = useState(1);
  const [userInfo, setUserInfo] = useState();

  const { loading, error, list } = useFetch(pageNumber, 20, pathname);

  useEffect(() => {
    axios
      .get(
        `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com${pathname}`
      )
      .then((result) => {
        setUserInfo(result.data);
        // console.log(result.data);
      });
  }, [pathname]);

  return (
    <div
      className="mx-auto p-[10px] max-w-[1200px] flex flex-col"
      style={{ border: "1px solid #ccc" }}
    >
      {userInfo && <UserInfo userInfo={userInfo} />}
      <div id="usersHistory" className="w-full mt-8">
        {usersHistory &&
          usersHistory.map((user: any, i: number) => (
            <>
              <a href={`/user/${user.id}`}>
                {user.prefix} {user.name} {user.lastName}
              </a>
              {usersHistory.length - 1 !== i ? " > " : ""}
            </>
          ))}
      </div>
      <h2 id="friends" className="mt-12 mb-5">
        Friends:
      </h2>
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

export default User;
