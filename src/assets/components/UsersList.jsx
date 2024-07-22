import { useState } from "react";
import style from "../css/UsersList.module.css";
import UsersListFilters from "./UsersListFilters";
import UsersListRows from "./UsersListRows";
import { filterActiveUsers, filterUsersByName, sortUsers } from "./lib/users/FilterUsers";
import { useFilters } from "./lib/hooks/useFilters";


function UsersList({ initialUsers }) {
  const { search, onlyActive, sortBy, setSearch, setOnlyActive, setSortBy } =
    useFilters();

  const { users } = useUsers(initialUsers);

  let usersFiltered = filterActiveUsers(users, onlyActive);
  usersFiltered = filterUsersByName(usersFiltered, search);
  usersFiltered = sortUsers(usersFiltered, sortBy);

  return (
    <div className={style.list}>
      <UsersListFilters
        search={search}
        setSearch={setSearch}
        onlyActive={onlyActive}
        setOnlyActive={setOnlyActive}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <UsersListRows users={usersFiltered} />
    </div>
  );
}



const useUsers = (initialUsers) => {
  const [users, setUsers] = useState(initialUsers);

  return { users };
};

export default UsersList;
