import UsersRow from "./UsersRow";

const UsersListRows = ({users, toggleUserActive}) => {
  if (!users.length) return <p>No hay usuarios</p>;

  return users.map((user) => <UsersRow key={user.id} toggleUserActive= {toggleUserActive} {...user} />);
};

export default UsersListRows;