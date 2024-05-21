import '../css/List.css';
import Users from './Users';

function List({ users, children }){
const usersRendered = users.map(user => <Users key={user.name} {...user} />)
return(
  <div className="list"> 
    {usersRendered}
    { children } 
  </div>
);
}
export default List;