import { useState } from "react";
import UsersListPagination from "../components/icons/UsersListPagination";
import style from "../css/UsersList.module.css";
import UsersListFilters from "./UsersListFilters";
import UsersListRows from "./UsersListRows";
import { useFilters } from "./lib/hooks/useFilters";
import {
  filterActiveUsers,
  filterUsersByName,
  paginateUsers,
  sortUsers,
} from "./lib/users/filterUsers";

function UsersList({ initialUsers }) {
  const { search, onlyActive, sortBy, setSearch, setOnlyActive, setSortBy } =
    useFilters();

  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const { users } = getUsers(initialUsers, {
    search,
    onlyActive,
    sortBy,
    page,
    itemsPerPage,
  });

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

      <UsersListRows users={users} />
      <UsersListPagination
        page={page}
        itemsPerPage={itemsPerPage}
        setPage={setPage}
        setItemsPerPage={setItemsPerPage}
      />
    </div>
  );
}

const getUsers = (
  initialUsers,
  { search, onlyActive, sortBy, page, itemsPerPage }
) => {
  let usersFiltered = filterActiveUsers(initialUsers, onlyActive);
  usersFiltered = filterUsersByName(usersFiltered, search);
  usersFiltered = sortUsers(usersFiltered, sortBy);
  usersFiltered = paginateUsers(usersFiltered, page, itemsPerPage);

  return { users: usersFiltered };
};

export default UsersList;
