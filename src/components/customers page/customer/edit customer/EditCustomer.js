import CustomerForm from "../form/CustomerForm";

function EditCustomer() {
  return (
    <main className='main py-5 main--edit-customer'>
      <div className='main__content'>
        <h1 className='fs-2 mb-5'>Edit Customer</h1>
        <div>
          <CustomerForm mode='UPDATE' />
        </div>
      </div>
    </main>
  );
}

export default EditCustomer;
