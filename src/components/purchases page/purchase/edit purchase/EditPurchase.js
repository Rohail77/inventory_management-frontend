import AddedPurchasesTable from '../added purchases table/AddedPurchasesTable';
import PurchaseForm from '../purchase form/PurchaseForm';

function EditPurchase() {
  return (
    <main className='main py-5 main--edit-purchase'>
      <div className='main__content'>
        <h1 className='fs-2 mb-5'>Edit Purchase</h1>
        <div>
          <PurchaseForm mode={'UPDATE'} />
        </div>
        <AddedPurchasesTable />
      </div>
    </main>
  );
}

export default EditPurchase;
