import style from "../css/UserStatus.module.css";
import CheckCircleIcon from "./icons/CheckCircleIcon";
import CrossCircleIcon from "./icons/CrossCircleIcon";

function UserStatus({ active }) {
  const activeClassName = active ? style.active : style.inactive;
  const Icon = active ? CheckCircleIcon : CrossCircleIcon;

  return (
    <div className={activeClassName}>
      <Icon className={style.icon}/>
      <span > {active ? "Activo" : "Inactivo"}</span>
    </div>
  );
}

export default UserStatus;
