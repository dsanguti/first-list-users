import style from "../css/UserStatus.module.css";

function UserStatus({ active }) {
  const activeClassName = active ? style.active : style.inactive;
  return (
    <span className={activeClassName}> {active ? "Activo" : "Inactivo"}</span>
  );
}

export default UserStatus;
