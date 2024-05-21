import "./App.css";
import List from "./assets/components/List";
import Title from "./assets/components/Title";


function App() {

  const USERS = [
    {
      name: 'Daniel Sánchez',
      active: 'Activo',
      role: "Profesor"
    },
    {
      name: 'Juan Pérez',
      active: 'Baja',
      role: "Profesor"
    },
    {
      name: 'Juan Luis Dominguez',
      active: 'Activo',
      role: "Alumno"
    },
    {
      name: 'Eva Soriano',
      active: 'Baja',
      role: "Alumno"
    },
    {
      name: 'Jaime Santos',
      active: 'Activo',
      role: "Alumno"
    }

  ]
  return (
    <>
      <Title>Listado de Usuarios</Title>
      <List users = { USERS }>

      </List>
    </>
  );
}

export default App;
