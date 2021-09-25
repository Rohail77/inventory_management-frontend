import ProductForm from '../product form/ProductForm';

function AddProduct() {
  return (
    <main className='main py-5 main--add-product'>
      <div className='main__content'>
        <h1 className='fs-2 mb-5'>Add New Product</h1>
        <ProductForm mode={'CREATE'} />
      </div>
    </main>
  );
}
export default AddProduct;
