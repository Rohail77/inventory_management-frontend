import UserForm from "../form/UserForm";

function AddUser() {

  return (
    <main className='main py-5 main--add-user'>
      <div className='main__content'>
        <h1 className='fs-2 mb-5'>Add New User</h1>
        <div>
          <UserForm mode={'CREATE'} />
         </div>
      </div>
    </main>
  );
}

export default AddUser;
