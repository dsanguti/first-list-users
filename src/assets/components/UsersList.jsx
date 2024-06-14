import { useState } from "react";
import style from "../css/UsersList.module.css";
import UsersRow from "./UsersRow";

function UsersList({ users }) {
  const [search, setSearch] = useState("");

  const usersFiltered = filterUsersByName(users, search);
  const usersRendered = renderUsers(usersFiltered);

  return (
    <div className={style.list}>
      <input
        type="text"
        name="search"
        placeholder="buscar usuarios..."
        value={search}
        onChange={(ev) => setSearch(ev.target.value)}
      ></input>
      {usersRendered}
    </div>
  );
}

const filterUsersByName = (users, search)=>{}

const filterUsersByName = (users, search) => {
  if (!search) return users;

  const lowerCaseSearch = search.toLowerCase();

  return users.filter((user) =>
    user.name.toLowerCase().startsWith(lowerCaseSearch)
  );
};

const renderUsers = (users) => {
  if (users.length <= 0) return <p>No hay usuarios</p>;

  return users.map((user) => <UsersRow key={user.name} {...user} />);
};

export default UsersList;
