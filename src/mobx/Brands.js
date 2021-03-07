import { makeAutoObservable } from 'mobx'
import Alert from './Alert'
import { fetchBrandList } from '../services/fetchBrandlist'
import PageError from './PageError'


class Brands {
  brands = null

  constructor() {
    makeAutoObservable(this)
  }

  async load() {
    try {
      const brands = await fetchBrandList()
      this.setBrands(brands)
    } catch (e) {
      PageError.error()
      Alert.show({
        variant: 'danger',
        message: 'Оказия при загрузке брэндов'
      })
    }
  }

  setBrands(brands) {
    this.brands = brands
  }

}

export default new Brands()