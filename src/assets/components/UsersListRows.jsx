import UsersRow from "./UsersRow";

const UsersListRows = ({ users, error, loading }) => {
  if (loading) return <p> Cargando usuarios...</p>;
  if (error) return <p>Error al cargar los usuarios</p>;
  if (!users.length) return <p>No hay usuarios</p>;

  return users.map((user) => <UsersRow key={user.id} {...user} />);
};

export default UsersListRows;
