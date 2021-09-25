import UserForm from "../form/UserForm";

function EditUser() {
  return (
    <main className='main py-5 main--edit-user'>
      <div className='main__content'>
        <h1 className='fs-2 mb-5'>Edit User</h1>
        <div>
          <UserForm mode={'UPDATE'} />
        </div>
      </div>
    </main>
  );
}

export default EditUser
