import AddCategoryForm from './add category form/AddCategoryForm';
import EditCategoryModal from './edit category modal/EditCategoryModal';
import CategoriesTable from './table/CategoriesTable';

function Categories() {
  return (
    <main className='main py-5 main--categories'>
      <div className='main__content'>
        <div className='d-xl-flex align-items-center'>
          <AddCategoryForm />
        </div>

        <section className='mt-5 table-container'>
          <div className='card'>
            <div className='card-header fs-2'>Categories</div>
            <div className='card-body'>
              <div className='table-responsive'>
                <CategoriesTable />
              </div>
            </div>
          </div>
        </section>
      </div>
      <EditCategoryModal />
    </main>
  );
}

export default Categories;
