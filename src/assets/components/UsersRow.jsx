import style from "../css/UsersRow.module.css";
import UserRole from "./UserRole";
import UserStatus from "./UserStatus";

function UsersRow({ name, active, role = "profesor" }) {
  return (
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
    </div>
  );
}

export default UsersRow;
