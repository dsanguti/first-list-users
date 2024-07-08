import { useState } from "react";
import style from "../css/UsersList.module.css";
import UsersListFilters from "./UsersListFilters";
import UsersListRows from "./UsersListRows";


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

const filterUsersByName = (users, search) => {
  if (!search) return [...users];

  const lowerCaseSearch = search.toLowerCase();

  return users.filter((user) =>
    user.name.toLowerCase().startsWith(lowerCaseSearch)
  );
};

const filterActiveUsers = (users, active) => {
  if (!active) return [...users];

  return users.filter((user) => user.active);
};

const sortUsers = (users, sortBy) => {
  const sortedUsers = [...users];

  switch (sortBy) {
    case 1:
      return sortedUsers.sort((a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      });
    default:
      return sortedUsers;
  }
};

const useFilters = () => {
  const [filters, setFilters] = useState({
    search: "",
    onlyActive: false,
    sortBy: 0,
  });
  const setSearch = (search) =>
    setFilters({
      ...filters,
      search,
    });

  const setSortBy = (sortBy) =>
    setFilters({
      ...filters,
      sortBy,
    });

  const setOnlyActive = (onlyActive) =>
    setFilters({
      ...filters,
      onlyActive,
    });

  return {
    ...filters,
    setSearch,
    setSortBy,
    setOnlyActive,
  };
};

const useUsers = (initialUsers) => {
  const [users, setUsers] = useState(initialUsers);

  return { users };
};

export default UsersList;
