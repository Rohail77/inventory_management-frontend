import AddedSalesTable from '../added sales table/AddedSalesTable';
import SaleForm from '../sale form/SaleForm';

function AddSale() {
  return (
    <main className='main py-5 main--add-sale'>
      <div className='main__content'>
        <h1 className='fs-2 mb-5'>Add New Sale</h1>
        <div>
          <SaleForm mode={'CREATE'} />
        </div>
        <AddedSalesTable />
      </div>
    </main>
  );
}

export default AddSale;
