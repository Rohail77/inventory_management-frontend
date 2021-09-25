import React from 'react';
import Product from './Product';

function InventoryTable() {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th scope='col'>Barcode</th>
          <th scope='col'>Name</th>
          <th scope='col'>Category</th>
          <th scope='col'>Quantity</th>
          <th scope='col'>Purchase Price (RS)</th>
          <th scope='col'>Final Sale Price (RS)</th>
          <th scope='col'>Actions</th>
        </tr>
      </thead>
      <tbody>
        {inventories.map((inventory, index) => (
          <Product
            key={inventory.barcode}
            barcode={inventory.barcode}
            title={inventory.title}
            category={inventory.category}
            quantity={inventory.inStock}
            purchasePrice={inventory.purchasePrice}
            finalSalePrice={inventory.finalSalePrice}
          />
        ))}
      </tbody>
    </table>
  );
}

const inventories = [
  {
    barcode: '1112122',
    title: 'Product 1',
    category: 'bakery',
    inStock: 4,
    purchasePrice: 200,
    finalSalePrice: 224,
  },
  {
    barcode: '1123122',
    title: 'Product 1',
    category: 'bakery',
    inStock: 4,
    purchasePrice: 200,
    finalSalePrice: 224,
  },
];

export default InventoryTable;
