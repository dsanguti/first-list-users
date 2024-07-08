
import style from "../css/UsersRow.module.css";
import UserDisplay from "./UserDisplay";
import UserRole from "./UserRole";
import UserStatus from "./UserStatus";



const UsersRow = ({ username, name, active, role = "profesor" }) => {
  
 

  return (
  <div className={style.user}>
    <div className={style.name}>
      <UserDisplay name={name} username={username}/>
    </div>
    <div className={style.status}>
      <UserStatus active={active} />
    </div>
    <div className={style.role}>
      <UserRole role={role} />
    </div>
    <div className={style.action}>
      
    </div>
  </div>
);

};


export default UsersRow;
