import { Link } from 'react-router-dom';

function Product({
  barcode,
  title,
  category,
  quantity,
  purchasePrice,
  finalSalePrice,
}) {
  return (
    <tr>
      <td>{barcode}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td>{quantity}</td>
      <td>{purchasePrice}</td>
      <td>{finalSalePrice}</td>
      <td>
        <Link
          to='/edit_product'
          className='btn btn-secondary btn-sm me-2 p-1'
          data-bs-toggle='tooltip'
          data-bs-placement='right'
          title='Edit'
        >
          <i className='fas fa-edit action-icon fw-lighter'></i>
        </Link>
        <button
          className='btn btn-danger btn-sm p-1'
          data-bs-toggle='tooltip'
          data-bs-placement='right'
          title='Delete'
        >
          <i className='fas fa-trash-alt action-icon fw-lighter'></i>
        </button>
      </td>
    </tr>
  );
}

export default Product;
