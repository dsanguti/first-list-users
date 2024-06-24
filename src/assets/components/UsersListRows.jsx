import UsersRow from "./UsersRow";

const UsersListRows = ({users}) => {
  if (!users.length) return <p>No hay usuarios</p>;

  return users.map((user) => <UsersRow key={user.id} {...user} />);
};

export default UsersListRows;