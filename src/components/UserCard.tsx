import { useContext } from "react";
import { Link } from "react-router-dom";

import { usersHistoryContext } from "../context/usersHistory"

function UserCard({ user }: { user: any }) {
  const { id, imageUrl, lastName, name, prefix, title } = user;

  const { setUsersHistory } = useContext(usersHistoryContext);

  const onClick = () => {
    setUsersHistory((users: any) => [...users, user]);
    window.scrollTo(0, 0);
  };

  return (
    <a
      className="w-full no-underline border-solid divide-[#ccc] flex flex-col items-center justify-start"
      as={Link}
      to={`/user/${id}`}
      onClick={onClick}
    >
      <img src={`${imageUrl}?v=${id}`} alt={name} className="w-full" />
      <div className="w-full px-[10px] text-black">
        <h3>
          {prefix} {name} {lastName}
        </h3>
        <p>{title}</p>
      </div>
    </a>
  );
}

export default UserCard;
