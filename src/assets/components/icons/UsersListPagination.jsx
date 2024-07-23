import Select from "../forms/Select";
import style from '../../css/UsersListPagination.module.css';
import IconButton from "../buttons/IconButton";
import EditIcon from "./EditIcon";

const UsersListPagination = ({
  page,
  itemsPerpage,
  setPage,
  setItemsPerPage,
}) => (
  <div className={style.wrapper}>
    <div className={style.itemsPerPage}>
      <Select
        value={itemsPerpage}
        onChange={(ev) => setItemsPerPage(Number(ev.target.value))}
      >
        {" "}
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </Select>
      <p>Elementos por página</p>
    </div>
    <IconButton  kind='red' filled  icon={EditIcon} />
  </div>
);
export default UsersListPagination;
