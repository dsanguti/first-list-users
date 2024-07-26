
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
  const {
    filters,
    setSearch,
    setOnlyActive,
    setSortBy,
    setPage,
    setItemsPerPage,
  } = useFilters();

 
  const { users, totalPages } = getUsers(initialUsers, filters);

  return (
    <div className={style.list}>
      <UsersListFilters
        search={filters.search}
        setSearch={setSearch}
        onlyActive={filters.onlyActive}
        setOnlyActive={setOnlyActive}
        sortBy={filters.sortBy}
        setSortBy={setSortBy}
      />

      <UsersListRows users={users} />
      <UsersListPagination
        page={filters.page}
        itemsPerPage={filters.itemsPerPage}
        setPage={setPage}
        setItemsPerPage={setItemsPerPage}
        totalPages={totalPages}
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
