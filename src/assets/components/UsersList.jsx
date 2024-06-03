
import style from '../css/UsersList.module.css';
import UsersRow from "./UsersRow";
import { useState } from 'react';


function UsersList({ users }) {

  const [search, setSearch] = useState('');

  const usersRendered = filterAndRenderUsers(users, search);

  return (
    <div className={style.list}>
      
      <input type="text" name='search' placeholder = 'buscar usuarios...'value={search} onChange={ev => setSearch(ev.target.value)}></input>
      {usersRendered}
    </div>
  );
}

const filterAndRenderUsers = (users, search,)=>{
  const normalizeSearch = search.toLowerCase();

  const userFiltered = search 
  ? users.filter(user => user.name.toLowerCase().startsWith(normalizeSearch)) 
  : users;

  const usersRendered = 
  userFiltered.length > 0 ? (userFiltered.map(user => 
    <UsersRow key={user.name} {...user} />)
  ) : (<p>No hay Usuarios</p>);

  return usersRendered;
}

export default UsersList;
