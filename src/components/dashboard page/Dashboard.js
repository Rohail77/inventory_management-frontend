import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import CashFlowStats from './cash flow stats/CashFlowStats';
import InventoryStats from './inventory stats/InventoryStats';
import HighestSellingProductsTable from './tables/highest selling products/HighestSellingProductsTable';

function Dashboard() {
  return (
    <Fragment>
      <main className='main main--dashboard py-5'>
        <div className='main__content'>
          <InventoryStats inStock={1500} underStock={3} />
          <hr />
          <CashFlowStats  totalPurchases={121000} totalSales={176000} salesProfit={45000}/>
          <hr />

          <section className='mt-5'>
            <div className='card'>
              <div className='card-header'>Highest Selling Products</div>
              <div className='card-body'>
                <div className='table-responsive'>
                  <HighestSellingProductsTable />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Fragment>
  );
}

export default Dashboard;
