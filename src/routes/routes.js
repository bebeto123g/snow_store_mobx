import HomePage from '../user/pageUser/HomePage'
import CatalogPage from '../user/pageUser/CatalogPage'
import CartPage from '../user/pageUser/CartPage'
import BrandsPage from '../user/pageUser/BrandsPage'
import OrdersPage from '../user/pageUser/OrdersPage'
import ProfilePage from '../user/pageUser/ProfilePage'
import OrderDetailsPage from '../user/pageUser/OrderDetailsPage'
import HomeAdminPage from '../admin/pageAdmin/HomeAdminPage'
import HomeManagerPage from '../manager/pageManager/HomeManagerPage'

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
]

export const managerRoutes = [
  { path: '/manager', component: HomeManagerPage, exact: true },
]