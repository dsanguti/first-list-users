import UsersRow from "./UsersRow";

const UsersListRows = ({users}) => {
  if (!users.length) return <p>No hay usuarios</p>;

  return users.map((user) => <UsersRow key={user.username} {...user} />);
};

export default UsersListRows;