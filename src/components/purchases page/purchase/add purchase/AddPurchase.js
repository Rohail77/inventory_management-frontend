import AddedPurchasesTable from '../added purchases table/AddedPurchasesTable';
import PurchaseForm from '../purchase form/PurchaseForm';

function AddPurchase() {
  return (
    <main className='main py-5 main--add-purchase'>
      <div className='main__content'>
        <h1 className='fs-2 mb-5'>Add New Purchase</h1>
        <div>
          <PurchaseForm mode={'CREATE'} />
        </div>

        <AddedPurchasesTable />
      </div>
    </main>
  );
}

export default AddPurchase;
