import CustomerForm from '../form/CustomerForm';

function AddCustomer() {
  return (
    <main className='main py-5 main--add-customer'>
      <div className='main__content'>
        <h1 className='fs-2 mb-5'>Add New Customer</h1>
        <div>
          <CustomerForm mode='CREATE' />
        </div>
      </div>
    </main>
  );
}

export default AddCustomer;
