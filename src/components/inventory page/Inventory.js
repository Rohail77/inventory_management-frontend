import { Link } from 'react-router-dom';
import FilterForm from './filter form/FilterForm';
import InventoryTable from './table/InventoryTable';

function Inventory() {
  return (
    <main className='main py-5 main--inventory'>
      <div className='main__content'>
        <div className='d-xl-flex align-items-center'>
          <Link className='btn btn-primary me-5 px-3 py-2' to='/add_product'>
            <i className='fas fa-plus me-2'></i> New Product
          </Link>
          <FilterForm />
        </div>

        <section className='mt-3'>
          <div className='card'>
            <div className='card-header fs-2'>Products</div>
            <div className='card-body'>
              <div className='table-responsive'>
                <InventoryTable />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Inventory;
