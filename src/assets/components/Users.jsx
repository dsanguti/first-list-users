import '../css/Users.css'

function Users({ name, active, role='profesor' }) {

  return (
    <div className="user">
      <span className="name"> { name }</span>
      <span className="active"> { active }</span>
      <span className="role">{ role }</span>
    </div>
  );
}

export default Users;