
import style from '../css/UsersList.module.css';
import UsersRow from "./UsersRow";


function UsersList({ users, children }) {
  const usersRendered = users.map((user) => (
    <UsersRow key={user.name} {...user} />
  ));
  return (
    <div className={style.list}>
      {usersRendered}
      {children}
    </div>
  );
}
export default UsersList;
