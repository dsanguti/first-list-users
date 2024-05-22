import style from "../css/UsersRow.module.css";

function UsersRow({ name, active, role = "profesor" }) {
  return (
    <div className={style.user}>
      <span className={style.name}> {name}</span>
      <span className={style.active}> {active}</span>
      <span className={style.role}>{role}</span>
    </div>
  );
}

export default UsersRow;
