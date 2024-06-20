import UsersRow from "./UsersRow";

const UsersListRows = ({users}) => {
  if (users.length <= 0) return <p>No hay usuarios</p>;

  return users.map((user) => <UsersRow key={user.name} {...user} />);
};

export default UsersListRows;