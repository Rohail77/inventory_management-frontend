import SupplierForm from '../form/SupplierForm';

function AddSupplier() {
  return (
    <main className='main py-5 main--add-supplier'>
      <div className='main__content'>
        <h1 className='mb-5'>Add New Supplier</h1>
        <div>
          <SupplierForm mode='CREATE'/>
        </div>
      </div>
    </main>
  );
}

export default AddSupplier;
