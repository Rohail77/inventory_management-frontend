import { Link } from 'react-router-dom';
import UsersTable from './table/UsersTable';

function Users() {
  return (
    <main className='main main--users py-5'>
      <div className='main__content'>
        <Link className='btn btn-primary me-5 px-3 py-2' to='/add_user'>
          <i className='fas fa-plus me-2'></i> New User
        </Link>

        <section className='mt-5'>
          <div className='card'>
            <div className='card-header fs-2'>Users</div>
            <div className='card-body'>
              <div className='table-responsive'>
                <UsersTable />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Users;
