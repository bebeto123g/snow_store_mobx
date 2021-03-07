import { makeAutoObservable } from 'mobx'
import { fetchAllOrder, fetchDetailOrder, fetchStatusOrderUndo } from '../services/fetchToOrder'
import Alert from './Alert'
import PageError from './PageError'

class Orders {
  orders = null
  detailOrder = {}

  constructor() {
    makeAutoObservable(this)
  }

  async load() {
    try {
      const token = localStorage.getItem('token')

      const response = await fetchAllOrder(token)

      const orders = response.data.map(({ cart, _id, sum, status, date }) => {
        return {
          orderId: _id,
          sum,
          cart,
          status,
          date: new Date(date).toLocaleString(),
          orderNum: _id.slice(-8, _id.length).toUpperCase()
        }
      })
      this.setOrders(orders)

    } catch {
      Alert.show({
        variant: 'danger',
        message: 'Оказия при загрузке заказов'
      })
      PageError.error()
    }
  }

  setOrders(orders) {
    this.orders = orders
  }

  async loadDetail(id) {
    try {
      const token = localStorage.getItem('token')

      const response = await fetchDetailOrder(token, id)

      const { cart, sum, status, date } = response.data

      const detail = {
        orderId: id,
        sum,
        cart,
        status,
        date: new Date(date).toLocaleString(),
        orderNum: id.slice(-8, id.length).toUpperCase()
      }

      this.setDetailOrder(detail)

    } catch {
      Alert.show({
        variant: 'danger',
        message: 'Оказия при загрузке заказа'
      })
      PageError.error()
    }
  }

  setDetailOrder(detail) {
    this.detailOrder = detail
  }

  setDetailOrderStatus(status) {
    this.detailOrder.status = status
  }

  async putStatus(type) {
    try {
      const token = localStorage.getItem('token')

      const response = await fetchStatusOrderUndo(token, this.detailOrder.orderId, type)

      const { status } = response.data

      this.setDetailOrderStatus(status)

      await this.load()

      Alert.show({
        variant: 'success',
        message: `Статус заказа '${status}'`
      })
    } catch {
      Alert.show({
        variant: 'danger',
        message: 'Ошибка изменения заказа!'
      })
    }
  }

  clear() {
    this.orders = []
    this.detailOrder = {}
  }
}

export default new Orders()