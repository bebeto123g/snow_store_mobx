import { makeAutoObservable } from 'mobx'
import { fetchCatalog } from '../services/fetchCatalog'
import Alert from './Alert'
import CatalogMap from './CatalogMap'
import CartMap from './CartMap'
import PageError from './PageError'

class Catalog {
  catalog = []

  constructor() {
    makeAutoObservable(this)
  }

  async load() {
    try {
      const catalog = await fetchCatalog()

      const cartMap = JSON.parse(localStorage.getItem('cartMap'))

      catalog.forEach((item) => {
        cartMap
          ? (item.inCart = cartMap.includes(item.id))
          : (item.inCart = false)
      })

      this.catalog = catalog
      CatalogMap.load(catalog)
    } catch {
      Alert.show({
        variant: 'danger',
        message: 'Оказия при загрузке каталога'
      })
      PageError.error()
    }
  }

  update() {
    const cartMap = CartMap.cartMap
    if (!this.catalog.length) return

    console.log('update Catalog')

    this.catalog.forEach((item) => {
      item.inCart = cartMap.includes(item.id)
    })
  }

}

export default new Catalog()