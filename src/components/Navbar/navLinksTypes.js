export const navLinksUser = [
  { to: '/', exact: true, text: 'Главная', isAuth: false },
  { to: '/catalog', exact: true, text: 'Каталог', isAuth: false },
  { to: '/brands', exact: true, text: 'Брэнды', isAuth: false },
  { to: '/orders', exact: true, text: 'Заказы', isAuth: true },
  { to: '/profile', exact: true, text: 'Профиль', isAuth: true },
]

export const navLinksManager = [
  { to: '/manager', exact: true, text: 'Главная'},
  { to: '/manager/category', exact: true, text: 'Категории товаров' },
  { to: '/manager/users', exact: true, text: 'Пользователи' },
  { to: '/manager/orders', exact: true, text: 'Заказы' },
]

export const navLinksAdmin = [
  { to: '/admin', exact: true, text: 'Главная'},
  { to: '/admin/add', exact: true, text: 'Добавить манагера' },
  { to: '/admin/list/1', exact: true, text: 'Список манагеров' },
]
