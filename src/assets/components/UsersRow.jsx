import { useContext } from "react";
import style from "../css/UsersRow.module.css";
import UserRole from "./UserRole";
import UserStatus from "./UserStatus";
import { UsersContext } from "./lib/contexts/UserContexts";


const UsersRow = ({ id, name, active, role = "profesor" }) => {
  
  const { toggleUserActive } = useContext(UsersContext);

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
    <div className={style.action}>
      <button onClick={() => toggleUserActive(id)}>{active ? "Inactivo" : "Activo"}</button>
    </div>
  </div>
);

};


export default UsersRow;
