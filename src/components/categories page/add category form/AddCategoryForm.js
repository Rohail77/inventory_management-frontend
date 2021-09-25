import { useState } from 'react';

function AddCategoryForm() {
  const [form, setForm] = useState({ name: '' });
  const handleSubmit = event => {
    event.preventDefault();
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setForm({
      [name]: value,
    });
  };

  return (
    <form action='' className='d-md-flex align-items-center'>
      <input
        type='text'
        className='form-control w-auto'
        placeholder='Add new category'
        name='name'
        value={form.name}
        onChange={handleChange}
        required
      />
      <button
        className='btn btn-primary ms-3 px-3 py-1'
        type='submit'
        onSubmit={handleSubmit}
      >
        <i className='fas fa-plus me-2'></i> Add
      </button>
    </form>
  );
}

export default AddCategoryForm;
