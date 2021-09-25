import { Route, Switch } from 'react-router';
import Categories from './components/categories page/Categories';
import AddCustomer from './components/customers page/customer/add customer/AddCustomer';
import Customers from './components/customers page/Customers';
import Dashboard from './components/dashboard page/Dashboard';
import AddProduct from './components/inventory page/product/add product/AddProduct';
import EditProduct from './components/inventory page/product/edit product/EditProduct';
import Inventory from './components/inventory page/Inventory';
import AddPurchase from './components/purchases page/purchase/add purchase/AddPurchase';
import Purchases from './components/purchases page/Purchases';
import PurchasesReport from './components/reports pages/purchases reports page/PurchasesReport';
import SalesReport from './components/reports pages/sales reports page/SalesReport';
import AddSale from './components/sales page/sale/add sale/AddSale';
import Sales from './components/sales page/Sales';
import AddSupplier from './components/suppliers page/supplier/add supplier/AddSupplier';
import Suppliers from './components/suppliers page/Suppliers';
import AddUser from './components/users page/user/add user/AddUser';
import Users from './components/users page/Users';
import EditUser from './components/users page/user/edit user/EditUser';
import EditSupplier from './components/suppliers page/supplier/edit supplier/EditSupplier';
import EditCustomer from './components/customers page/customer/edit customer/EditCustomer';
import EditSale from './components/sales page/sale/edit sale/EditSale';
import EditPurchase from './components/purchases page/purchase/edit purchase/EditPurchase';

function AppRouter() {
  return (
    <Switch>
      <Route path='/purchases_report'>
        <PurchasesReport />
      </Route>
      <Route path='/sales_report'>
        <SalesReport />
      </Route>
      <Route path='/edit_sale'>
        <EditSale />
      </Route>
      <Route path='/add_sale'>
        <AddSale />
      </Route>
      <Route path='/edit_purchase'>
        <EditPurchase />
      </Route>
      <Route path='/add_purchase'>
        <AddPurchase />
      </Route>
      <Route path='/edit_supplier'>
        <EditSupplier />
      </Route>
      <Route path='/add_supplier'>
        <AddSupplier />
      </Route>
      <Route path='/edit_product'>
        <EditProduct />
      </Route>
      <Route path='/add_product'>
        <AddProduct />
      </Route>
      <Route path='/edit_customer'>
        <EditCustomer />
      </Route>
      <Route path='/add_customer'>
        <AddCustomer />
      </Route>
      <Route path='/edit_user'>
        <EditUser />
      </Route>
      <Route path='/add_user'>
        <AddUser />
      </Route>
      <Route path='/sales'>
        <Sales />
      </Route>
      <Route path='/customers'>
        <Customers />
      </Route>
      <Route path='/purchases'>
        <Purchases />
      </Route>
      <Route path='/suppliers'>
        <Suppliers />
      </Route>
      <Route path='/categories'>
        <Categories />
      </Route>
      <Route path='/users'>
        <Users />
      </Route>
      <Route path='/inventory'>
        <Inventory />
      </Route>
      <Route path='/'>
        <Dashboard />
      </Route>
    </Switch>
  );
}

export default AppRouter;
