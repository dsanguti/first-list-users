import style from "../css/UsersRow.module.css";
import UserRole from "./UserRole";
import UserStatus from "./UserStatus";

const UsersRow = ({ id, name, active, role = "profesor", toggleUserActive }) => (
  <div className={style.user}>
    <div className={style.name}>
      <span> {name}</span>
    </div>
    <div className={style.status}>
      <UserStatus active={active} />
    </div>
    <div className={style.role}>
      <UserRole role={role} />
    </div>
    <div className={style.action}>
      <button onClick={() => toggleUserActive(id)}>{active ? "Inactivo" : "Activo"}</button>
    </div>
  </div>
);

export default UsersRow;
