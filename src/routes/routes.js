import HomePage from '../page/HomePage'
import CatalogPage from '../page/CatalogPage'
import CartPage from '../page/CartPage'
import BrandsPage from '../page/BrandsPage'
import OrdersPage from '../page/OrdersPage'
import ProfilePage from '../page/ProfilePage'
import OrderDetailsPage from '../page/OrderDetailsPage'
import HomeAdminPage from '../pageAdmin/HomeAdminPage'
import HomeManagerPage from '../pageManager/HomeManagerPage'

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
  { path: '/admin/', component: HomeAdminPage, exact: true, isAdmin: true },
]

export const managerRoutes = [
  { path: '/manager/', component: HomeManagerPage, exact: true, isManager: true },
]