import AddedSalesTable from '../added sales table/AddedSalesTable';
import SaleForm from '../sale form/SaleForm';

function EditSale() {
  return (
    <main className='main py-5 main--edit-sale'>
      <div className='main__content'>
        <h1 className='fs-2 mb-5'>Edit Sale</h1>
        <div>
          <SaleForm mode={'UPDATE'} />
        </div>

        <AddedSalesTable />
      </div>
    </main>
  );
}

export default EditSale;
