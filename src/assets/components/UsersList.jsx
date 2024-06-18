import { useState } from "react";
import style from "../css/UsersList.module.css";
import UsersRow from "./UsersRow";

function UsersList({ users }) {
  const [search, setSearch] = useState("");

  const [onlyActive, setOnlyActive] = useState(false);

  const [sortBy, setSortBy] = useState(0);

  let usersFiltered = filterActiveUsers(users, onlyActive);

  usersFiltered = filterUsersByName(usersFiltered, search);

  usersFiltered = sortUsers(usersFiltered, sortBy);

  const usersRendered = renderUsers(usersFiltered);

  return (
    <div className={style.list}>
      <form className={style.form}>
        <input
          type="text"
          placeholder="buscar usuarios..."
          value={search}
          onChange={(ev) => setSearch(ev.target.value)}
        ></input>
        <div className={style.active}>
          <input
            type="checkbox"
            name="active"
            checked={onlyActive}
            onChange={(ev) => setOnlyActive(ev.target.checked)}
          ></input>
          <span>Sólo activos</span>
        </div>
        <select value={sortBy} onChange={ev => setSortBy(Number(ev.target.value))}>
          <option value={0}>Por defecto</option>
          <option value={1}>Por nombre</option>
        </select>
      </form>
      {usersRendered}
    </div>
  );
}

const filterUsersByName = (users, search) => {
  if (!search) return [... users];

  const lowerCaseSearch = search.toLowerCase();

  return users.filter((user) =>
    user.name.toLowerCase().startsWith(lowerCaseSearch)
  );
};

const filterActiveUsers = (users, active) => {
  if (!active) return [... users];

  return users.filter((user) => user.active);
};
const renderUsers = (users) => {
  if (users.length <= 0) return <p>No hay usuarios</p>;

  return users.map((user) => <UsersRow key={user.name} {...user} />);
};

const sortUsers = (users, sortBy) =>{

  const sortedUsers = [... users];

  switch(sortBy){
    case 1:
       return sortedUsers.sort((a,b)=>{
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      })
    default:
      return sortedUsers;
  }
}

export default UsersList;
