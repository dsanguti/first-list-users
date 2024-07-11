import style from "../css/UsersListFilters.module.css";
import InputCheckBox from "./forms/InputCheckBox";
import InputSearch from "./forms/InputSearch";

const UsersListFilters = ({
  search,
  setSearch,
  onlyActive,
  setOnlyActive,
  sortBy,
  setSortBy,
}) => (
  <form className={style.form}>
    <InputSearch
      placeholder="Buscar..."
      value={search}
      onChange={(ev) => setSearch(ev.target.value)}
    />
    <div className={style.active}>
      <InputCheckBox
      className={style.checkbox}
        name="active"
        checked={onlyActive}
        onChange={(ev) => setOnlyActive(ev.target.checked)}
      />
      <p>Sólo activos</p>
    </div>
    <select
      value={sortBy}
      onChange={(ev) => setSortBy(Number(ev.target.value))}
    >
      <option value={0}>Por defecto</option>
      <option value={1}>Por nombre</option>
      <option value={2}>Por rol</option>
      {!onlyActive && <option value={3}>Por activación</option>}
    </select>
  </form>
);

export default UsersListFilters;
