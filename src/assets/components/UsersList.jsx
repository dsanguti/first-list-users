
import UsersListPagination from "../components/icons/UsersListPagination";
import style from "../css/UsersList.module.css";
import UsersListFilters from "./UsersListFilters";
import UsersListRows from "./UsersListRows";
import { useFilters } from "./lib/hooks/useFilters";

import { useUsers } from "./lib/hooks/useUsers";

function UsersList() {
  const {
    filters,
    setSearch,
    setOnlyActive,
    setSortBy,
    setPage,
    setItemsPerPage,
  } = useFilters();

  const { users, totalPages, error, loading } = useUsers(filters);

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

      <UsersListRows users={users} error={error} loading={loading}/>
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


export default UsersList;
