import { useContext } from "react";
import { Link } from "react-router-dom";

import { UsersHistoryContext } from "../context/usersHistory";

function UserCard({ user }: { user: any }) {
  const { id, imageUrl, lastName, name, prefix, title } = user;

  const { setUsersHistory } = useContext(UsersHistoryContext);

  const onClick = () => {
    setUsersHistory((users: any) => [...users, user]);
    window.scrollTo(0, 0);
  };

  return (
    <Link
      className="w-full no-underline flex flex-col items-center justify-start"
      style={{ border: "1px solid #ccc" }}
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
    </Link>
  );
}

export default UserCard;
