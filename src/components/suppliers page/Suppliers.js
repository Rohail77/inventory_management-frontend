import { Link } from 'react-router-dom';
import SuppliersTable from './table/SuppliersTable';

function Suppliers() {
  return (
    <main className='main py-5 main--suppliers'>
      <div className='main__content'>
        <div className='d-xl-flex align-items-center'>
          <Link className='btn btn-primary px-3 py-2' to='/add_supplier'>
            <i className='fas fa-plus me-2'></i> New Supplier
          </Link>
        </div>

        <section className='mt-5 table-container'>
          <div className='card'>
            <div className='card-header fs-2'>Suppliers</div>
            <div className='card-body'>
              <div className='table-responsive'>
                <SuppliersTable />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Suppliers;
