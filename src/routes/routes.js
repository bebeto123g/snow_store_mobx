// user routes
import HomePage from '../user/pageUser/HomePage'
import CatalogPage from '../user/pageUser/CatalogPage'
import CartPage from '../user/pageUser/CartPage'
import BrandsPage from '../user/pageUser/BrandsPage'
import OrdersPage from '../user/pageUser/OrdersPage'
import ProfilePage from '../user/pageUser/ProfilePage'
import OrderDetailsPage from '../user/pageUser/OrderDetailsPage'

// admin routes
import HomeAdminPage from '../admin/pageAdmin/HomeAdminPage'
import HomeManagerPage from '../manager/pageManager/HomeManagerPage'
import ManagerAddPage from '../admin/pageAdmin/ManagerAddPage'
import ManagerPage from '../admin/pageAdmin/ManagerPage'
import ManagersListPage from '../admin/pageAdmin/ManagersListPage'

// manager routes
import ProductsCategoryPage from '../manager/pageManager/ProductsCategoryPage'
import ProductsListPage from '../manager/pageManager/ProductsListPage'
import ProductPage from '../manager/pageManager/ProductPage'
import UsersListPage from '../manager/pageManager/UsersListPage'
import UserPage from '../manager/pageManager/UserPage'
import OrdersListPage from '../manager/pageManager/OrdersListPage'
import OrderPage from '../manager/pageManager/OrderPage'

export const userRoutes = [
  { path: '/', component: HomePage, exact: true, isAuth: false },
  { path: '/catalog', component: CatalogPage, exact: true, isAuth: false },
  { path: '/cart', component: CartPage, exact: true, isAuth: false },
  { path: '/brands', component: BrandsPage, exact: true, isAuth: false },
  { path: '/profile', component: ProfilePage, exact: true, isAuth: true },
  { path: '/orders', component: OrdersPage, exact: true, isAuth: true },
  {
    path: '/orders/:id',
    component: OrderDetailsPage,
    exact: true,
    isAuth: true,
  },
]

export const adminRoutes = [
  { path: '/admin', component: HomeAdminPage, exact: true },
  { path: '/admin/add', component: ManagerAddPage, exact: true },
  { path: '/admin/manager/:id', component: ManagerPage, exact: true },
  { path: '/admin/list/:count', component: ManagersListPage, exact: true },
]

export const managerRoutes = [
  { path: '/manager', component: HomeManagerPage, exact: true },
  { path: '/manager/category', component: ProductsCategoryPage, exact: true },
  { path: '/manager/products/:list', component: ProductsListPage, exact: true },
  { path: '/manager/products/:list/:id', component: ProductPage, exact: true },

  { path: '/manager/users', component: UsersListPage, exact: true },
  { path: '/manager/users/:id', component: UserPage, exact: true },

  { path: '/manager/orders', component: OrdersListPage, exact: true },
  { path: '/manager/orders/:id', component: OrderPage, exact: true },
]