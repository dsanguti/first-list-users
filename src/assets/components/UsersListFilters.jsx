import style  from '../css/UsersListFilters.module.css';


const UsersListFilters = ( {search, setSearch, onlyActive, setOnlyActive, sortBy, setSortBy}) => (
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
    <select
      value={sortBy}
      onChange={(ev) => setSortBy(Number(ev.target.value))}
    >
      <option value={0}>Por defecto</option>
      <option value={1}>Por nombre</option>
    </select>
  </form>
);

export default UsersListFilters;