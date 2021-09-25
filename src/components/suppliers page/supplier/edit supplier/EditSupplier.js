import SupplierForm from "../form/SupplierForm";

function EditSupplier() {
  return (
    <main className='main py-5 main--edit-supplier'>
      <div className='main__content'>
        <h1 className='mb-5'>Update Supplier</h1>
        <div>
        <SupplierForm mode='UPDATE' />
        </div>
      </div>
    </main>
  );
}

export default EditSupplier
