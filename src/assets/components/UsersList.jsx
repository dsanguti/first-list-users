import { useState } from "react";
import UsersListPagination from "../components/icons/UsersListPagination";
import { USER_FORMS } from "../constants/userForms";
import style from "../css/UsersList.module.css";
import UsersListFilters from "./UsersListFilters";
import UsersListRows from "./UsersListRows";

import { useFilters } from "./lib/hooks/useFilters";

import { useUsers } from "./lib/hooks/useUsers";
import Button from "./buttons/Button";
import UserCreateForm from "./user-forms/UserCreateForm";

function UsersList() {
  const { currentForm, setCreateForm } = useForm();

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
      {currentForm === USER_FORMS.FILTERS ? 
        <UsersListFilters
          search={filters.search}
          setSearch={setSearch}
          onlyActive={filters.onlyActive}
          setOnlyActive={setOnlyActive}
          sortBy={filters.sortBy}
          setSortBy={setSortBy}
          slot = {<Button onClick={setCreateForm}> Añadir usuario</Button>}
        />
       : 
       <UserCreateForm></UserCreateForm>
      }

      <UsersListRows users={users} error={error} loading={loading} />
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

const useForm = () => {
  const [currentForm, setCurrentForm] = useState(USER_FORMS.FILTERS);

  const setFiltersForm = () => setCurrentForm(USER_FORMS.FILTERS);
  const setCreateForm = () => setCurrentForm(USER_FORMS.CREATE);
  const setEditForm = () => setCurrentForm(USER_FORMS.EDIT);
  const setDeleteForm = () => setCurrentForm(USER_FORMS.DELETE);

  return {
    currentForm,
    setFiltersForm,
    setCreateForm,
    setEditForm,
    setDeleteForm,
  };
};

export default UsersList;
