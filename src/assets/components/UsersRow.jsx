import style from "../css/UsersRow.module.css";
import UserRole from "./UserRole";
import UserStatus from "./UserStatus";
import { useState } from "react";

function UsersRow({ name, active, role = "profesor" }) {

const [activeState, setActiveState] = useState(active);


  return (
    <div className={style.user}>
      <div className={style.name}>
        <span> {name}</span>
      </div>
      <div className={style.status}>
        <UserStatus active={activeState} />
      </div>
      <div className={style.role}>
        <UserRole role={role} />
      </div>
      <div className={style.action}>
        <button onClick={() => {setActiveState(!activeState)
          
        }}> {activeState ? "Desactivar" : "Activar"}</button>
      </div>
    </div>
  );
}

export default UsersRow;
