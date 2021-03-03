import { makeAutoObservable } from 'mobx'
import { fetchAllOrder, fetchDetailOrder, fetchStatusOrderUndo } from '../services/fetchToOrder'
import Alert from './Alert'

class Orders {
  orders = []
  detailOrder = {}

  constructor() {
    makeAutoObservable(this)
  }

  async load() {
    try {
      const token = localStorage.getItem('token')

      const response = await fetchAllOrder(token)

      this.orders = response.data.map(({ cart, _id, sum, status, date }) => {
        return {
          orderId: _id,
          sum,
          cart,
          status,
          date: new Date(date).toLocaleString(),
          orderNum: _id.slice(-8, _id.length).toUpperCase()
        }
      })

    } catch {
      Alert.show({
        variant: 'danger',
        message: 'Оказия при загрузке заказов'
      })
    }
  }

  async loadDetail(id) {
    try {
      const token = localStorage.getItem('token')

      const response = await fetchDetailOrder(token, id)

      const { cart, sum, status, date } = response.data

      this.detailOrder = {
        orderId: id,
        sum,
        cart,
        status,
        date: new Date(date).toLocaleString(),
        orderNum: id.slice(-8, id.length).toUpperCase()
      }

    } catch {
      Alert.show({
        variant: 'danger',
        message: 'Оказия при загрузке заказа'
      })
    }

  }

  async putStatus(type) {
    try {
      const token = localStorage.getItem('token')

      const response = await fetchStatusOrderUndo(token, this.detailOrder.orderId, type)

      const { status } = response.data

      this.detailOrder.status = status

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