import React from 'react';
import { Link } from 'react-router-dom';
import SalesTable from './table/SalesTable';

function Sales() {
  return (
    <main className='main py-5 main--purchases'>
      <div className='main__content'>
        <div className='d-xl-flex align-items-center'>
          <Link className='btn btn-primary px-3 py-2' to='/add_sale'>
            <i className='fas fa-plus me-2'></i> New Sale
          </Link>
        </div>

        <section className='mt-5 table-container'>
          <div className='card'>
            <div className='card-header fs-2'>Sales</div>
            <div className='card-body'>
              <div className='table-responsive'>
                <SalesTable />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Sales;
