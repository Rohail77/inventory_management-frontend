import User from './User';

function UsersTable() {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Username</th>
          <th scope='col'>Password</th>
          <th scope='col'>Email</th>
          <th scope='col'>Phone</th>
          <th scope='col'>Status</th>
          <th scope='col'>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <User
            name={user.name}
            username={user.username}
            password={user.password}
            email={user.email}
            phone={user.phone}
            status={user.status}
            key={index}
          />
        ))}
      </tbody>
    </table>
  );
}

const users = [
  {
    name: 'Waqas',
    username: 'Waqas991',
    password: '12abc',
    email: 'waqas@gmail.com',
    phone: '039097855648',
    status: 'Active',
  },
  {
    name: 'Shahid',
    username: 'Shahid991',
    password: '12ajkc',
    email: 'shahid@gmail.com',
    phone: '039090855648',
    status: 'Active',
  },
];

export default UsersTable;
