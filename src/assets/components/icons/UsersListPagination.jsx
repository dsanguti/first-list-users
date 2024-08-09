import style from "../../css/UsersListPagination.module.css";
import IconButton from "../buttons/IconButton";
import PageSelector from "../forms/PageSelector";
import Select from "../forms/Select";
import EditIcon from "./EditIcon";

const UsersListPagination = ({
  page,
  itemsPerpage,
  setPage,
  setItemsPerPage,
  totalPages,
}) => (
  <div className={style.wrapper}>
    <div className={style.itemsPerPage}>
      <Select
        value={itemsPerpage}
        onChange={(ev) => setItemsPerPage(Number(ev.target.value))}
      >
        {" "}
        <option value={4}>4</option>
        <option value={6}>6</option>
        <option value={8}>8</option>
        
      </Select>
      <p>Elementos por página</p>
    </div>
    <PageSelector page={page} totalPages={totalPages} setPage={setPage} />
    <IconButton kind="red" filled icon={EditIcon} />
  </div>
);
export default UsersListPagination;
