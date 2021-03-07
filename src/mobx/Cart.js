import { makeAutoObservable } from 'mobx'
import Catalog from './Catalog'
import CartMap from './CartMap'
import Orders from './Orders'
import { fetchToOrder } from '../services/fetchToOrder'
import Alert from './Alert'

class Cart {
  cart = {}

  constructor() {
    makeAutoObservable(this)
  }

  async init() {
    const cart = JSON.parse(localStorage.getItem('cart'))
    if (cart && Object.keys(cart).length) {
      CartMap.init(cart)
      await Catalog.load()
      this.setCart(cart)
    }
  }

  setCart(cart) {
    this.cart = cart
  }

  increment(id) {
    const catalog = Catalog.catalog
    const index = catalog.findIndex((item) => item.id === id)
    const { reserve } = catalog[index]

    if (this.cart[id] + 1 > reserve) return

    localStorage.setItem('cart', JSON.stringify(this.cart))
    this.cart[id]++
  }

  decrement(id) {
    if (this.cart[id] - 1 === 0) {
      this.remove(id)
      return
    }

    this.cart[id]--
    localStorage.setItem('cart', JSON.stringify(this.cart))

  }

  add(id) {
    this.cart[id] = 1
    CartMap.add(id)
    localStorage.setItem('cart', JSON.stringify(this.cart))
  }

  remove(id) {
    delete this.cart[id]

    if (!Object.keys(this.cart).length) {
      this.clear()
      return
    }

    localStorage.setItem('cart', JSON.stringify(this.cart))
    CartMap.remove(id)
  }

  clear() {
    localStorage.removeItem('cart')
    this.cart = {}
    CartMap.clear()
  }

  get sum() {
    const catalog = Catalog.catalog

    if (!catalog) return 0

    return Object.keys(this.cart).reduce((total, key) => {
      const index = catalog.findIndex((item) => item.id === key)
      const { price } = catalog[index]
      return total + +(price * this.cart[key])
    }, 0)
  }

  async sendOrder() {
    try {
      const token = localStorage.getItem('token')
      const catalog = Catalog.catalog
      const orders = Orders.orders

      const cart = Object.keys(this.cart).map((key) => {
        const index = catalog.findIndex(item => item.id === key)
        return { id: key, count: this.cart[key], price: catalog[index].price }
      })

      const response = await fetchToOrder({ cart, sum: this.sum }, token)

      if (orders && orders.length) {
        await Orders.load()
      }

      Catalog.update()
      this.clear()
      Alert.show({
        variant: 'success',
        message: response.data.message
      })
    } catch {
      Alert.show({
        variant: 'danger',
        message: 'Оказия при отправке заказа!'
      })
    }
  }
}

export default new Cart()
