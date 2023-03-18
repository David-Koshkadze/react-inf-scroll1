import { useContext } from "react";
import { Link } from "react-router-dom";

import { usersHistoryContext } from "../context/usersHistory";

function UserCard({ user }: { user: any }) {
  const { id, imageUrl, lastName, name, prefix, title } = user;

  const { setUsersHistory } = useContext(usersHistoryContext);

  const onClick = () => {
    setUsersHistory((users) => [...users, user]);
    window.scrollTo(0, 0);
  };

  return (
    <Container as={Link} to={`/user/${id}`} onClick={onClick}>
      <img src={`${imageUrl}?v=${id}`} alt={name} />
      <div>
        <h3>
          {prefix} {name} {lastName}
        </h3>
        <p>{title}</p>
      </div>
    </Container>
  );
}

export default UserCard;

