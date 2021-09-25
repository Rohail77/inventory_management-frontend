import { Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import Category from '../product category option/Category';

function ProductForm({ mode }) {
  const [form, setForm] = useState({
    barcode: '',
    name: '',
    category: 'all',
    purchasePrice: null,
    profitMargin: null,
    salePrice: null,
    discount: 0,
    discountedSalePrice: null,
    inStock: 1,
    stockAlert: null,
    description: null,
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setForm(form => ({
      ...form,
      [name]: value,
    }));
  };

  // parse string to integers before submitting
  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <form className='mt-4'>
      <div className='mb-3'>
        <label htmlFor='barcode' className='form-label fw-bold'>
          Barcode
        </label>
        <input
          type='text'
          className='form-control form-control-sm'
          id='barcode'
          name='barcode'
          value={form.barcode}
          onChange={handleChange}
          required
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='name' className='form-label fw-bold'>
          Name
        </label>
        <input
          type='text'
          className='form-control form-control-sm'
          id='name'
          name='name'
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='category' className='form-label fw-bold'>
          Category
        </label>
        <select
          className='form-select form-select-sm'
          id='category'
          name='category'
          value={form.category}
          onChange={handleChange}
          required
        >
          {categories.map(category => (
            <Category name={category.name} key={category.id} />
          ))}
        </select>
      </div>

      <div className='row row-cols-1 g-2 mb-3'>
        <div className='col mb-2'>
          <label htmlFor='purchase-price' className='form-label fw-bold'>
            Purchase price
          </label>
          <div className='input-group input-group-sm'>
            <span className='input-group-text'>RS</span>
            <input
              type='number'
              className='form-control'
              id='purchase-price'
              name='purchasePrice'
              value={form.purchasePrice}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className='d-sm-flex flex-row align-items-end col mb-2'>
          <div className='flex-fill mb-3 mb-sm-0 me-sm-2'>
            <label htmlFor='sale-price' className='form-label fw-bold'>
              Sale price
            </label>
            <div className='input-group input-group-sm'>
              <span className='input-group-text'>RS</span>
              <input
                type='number'
                className='form-control'
                id='sale-price'
                name='salePrice'
                value={form.salePrice}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className='flex-fill'>
            <label htmlFor='profit-margin' className='form-label fw-bold'>
              Profit Margin
            </label>
            <div className='input-group input-group-sm'>
              <span className='input-group-text'>%</span>
              <input
                type='number'
                className='form-control form-control-sm'
                id='profit-margin'
                name='profitMargin'
                value={form.profitMargin}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className='d-sm-flex flex-row align-items-end col mb-2'>
          <div className='flex-fill me-sm-2 mb-3 mb-sm-0'>
            <label htmlFor='discount' className='form-label fw-bold'>
              Discount
            </label>
            <div className='input-group input-group-sm'>
              <span className='input-group-text'>%</span>
              <input
                type='number'
                className='form-control form-control-sm'
                id='discount'
                name='discount'
                value={form.discount}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='flex-fill'>
            <label
              htmlFor='discounted-sale-price'
              className='form-label fw-bold'
            >
              Discounted Sale Price
            </label>
            <div className='input-group input-group-sm'>
              <span className='input-group-text'>RS</span>
              <input
                type='number'
                className='form-control form-control-sm'
                id='discounted-sale-price'
                name='discountedSalePrice'
                value={form.discountedSalePrice}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        <div className='col d-sm-flex '>
          <div className='flex-grow-1 mb-3 mb-sm-0 me-sm-2'>
            <label htmlFor='quantity' className='form-label fw-bold'>
              Opening Stock
            </label>
            <input
              type='number'
              className='form-control form-control-sm'
              id='quantity'
              name='inStock'
              value={form.inStock}
              onChange={handleChange}
              required
            />
          </div>
          <div className='flex-grow-1'>
            <label htmlFor='stock-alert' className='form-label fw-bold'>
              Alert Quantity
            </label>
            <input
              type='number'
              className='form-control form-control-sm'
              id='stock-alert'
              name='stockAlert'
              value={form.stockAlert}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>

      <div className='flex-grow-1 mb-4'>
        <label htmlFor='description' className='form-label fw-bold'>
          Product Description
        </label>
        <textarea
          className='form-control'
          id='description'
          name='description'
          value={form.description}
          onChange={handleChange}
        >
          {' '}
        </textarea>
      </div>

      <div className='d-sm-flex'>
        <button
          type='submit'
          className='btn btn-primary flex-grow-1 mb-2 mb-sm-0'
          onSubmit={handleSubmit}
        >
          {mode === 'CREATE' ? 'Add' : 'Update'} Product
        </button>
        <Link to='/inventory' className='btn btn-danger flex-grow-1 ms-sm-3'>
          Cancel
        </Link>
      </div>
    </form>
  );
}

const categories = [
  { id: 2, name: 'kitchenware' },
  { id: 3, name: 'bakery' },
  { id: 4, name: 'movies & games' },
];

export default ProductForm;
