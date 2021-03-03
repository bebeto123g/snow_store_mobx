import { makeAutoObservable } from 'mobx'

class CartMap {
  cartMap = []

  constructor() {
    makeAutoObservable(this)
  }

  clear() {
    localStorage.removeItem('cartMap')
    this.cartMap = []
  }

  init(cart) {
    this.cartMap = [...Object.keys(cart)]
    localStorage.setItem('cartMap', JSON.stringify(this.cartMap))

  }

  add(id) {
    this.cartMap.push(id)
    localStorage.setItem('cartMap', JSON.stringify(this.cartMap))
  }

  remove(id) {
    this.cartMap = this.cartMap.filter((key) => key !== id)
    localStorage.setItem('cartMap', JSON.stringify(this.cartMap))

  }
}

export default new CartMap()