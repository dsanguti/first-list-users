import "./App.css";
import UsersList from "./assets/components/UsersList";
import Title from "./assets/components/Title";
import users from "./bd.json";

function App() {
  return (
    <>
      <Title>Listado de Usuarios</Title>
      <UsersList initialUsers={users}></UsersList>
    </>
  );
}

export default App;
