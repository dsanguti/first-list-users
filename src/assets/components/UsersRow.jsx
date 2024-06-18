import { useState } from "react";
import style from "../css/UsersRow.module.css";
import UserRole from "./UserRole";
import UserStatus from "./UserStatus";

function UsersRow({ name, active, role = "profesor" }) {
  const [isActive, setIsActive] = useState(active);

  return (
    <div className={style.user}>
      <div className={style.name}>
        <span> {name}</span>
      </div>
      <div className={style.status}>
        <UserStatus active={isActive} />
      </div>
      <div className={style.role}>
        <UserRole role={role} />
      </div>
      <div className={style.action}>
        <button
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          {" "}
          {isActive ? "Inactivo" : "Activo"}
        </button>
      </div>
    </div>
  );
}

export default UsersRow;
