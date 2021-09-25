import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";

function UserForm({mode}) {
  const [form, setForm] = useState({
    name: '',
    username: '',
    password: '',
    email: '',
    phone: '',
    status: 'Active',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setForm(form => ({
      ...form,
      [name]: value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <form className='mt-4'>
      <div className='mb-3'>
        <label htmlFor='name' className='form-label fw-bold'>
          Name
        </label>
        <input
          type='text'
          className='form-control form-control-sm'
          id='name'
          onChange={handleChange}
          name='name'
          value={form.name}
          required
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='username' className='form-label fw-bold'>
          Username
        </label>
        <input
          type='text'
          className='form-control form-control-sm'
          id='username'
          onChange={handleChange}
          name='username'
          value={form.username}
          required
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='password' className='form-label fw-bold'>
          Password
        </label>
        <input
          type='password'
          className='form-control form-control-sm'
          id='password'
          name='password'
          value={form.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='status' className='form-label fw-bold'>
          Status
        </label>
        <select
          className='form-select form-select-sm'
          id='status'
          name='status'
          value={form.status}
          onChange={handleChange}
        >
          <option value='Active' defaultValue>
            Active
          </option>
          <option value='Blocked'>Blocked</option>
        </select>
      </div>
      <div className='mb-3'>
        <label htmlFor='email' className='form-label fw-bold'>
          Email
        </label>
        <input
          type='email'
          className='form-control form-control-sm'
          id='email'
          name='email'
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='phone' className='form-label fw-bold'>
          Phone
        </label>
        <input
          type='tel'
          className='form-control form-control-sm'
          id='phone'
          onChange={handleChange}
          name='phone'
          value={form.phone}
          required
        />
      </div>

      <div className='d-sm-flex'>
        <button
          type='submit'
          className='btn btn-primary flex-grow-1 mb-2 mb-sm-0'
          onSubmit={handleSubmit}
        >
          {mode === 'CREATE' ? 'Add' : 'Update'} User
        </button>
        <Link
          to='/users'
          className='btn btn-danger flex-grow-1 ms-sm-3'
        >
          Cancel
        </Link>
      </div>
    </form>
  );
}

export default UserForm;
