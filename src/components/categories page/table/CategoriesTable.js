import Category from './Category';

function CategoriesTable() {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Actions</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((category, index) => (
          <Category name={category} key={index} />
        ))}
      </tbody>
    </table>
  );
}

const categories = ['kitchenware', 'bakery', 'Movies & Games'];

export default CategoriesTable;
