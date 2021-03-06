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
      this.brands = await fetchBrandList()
    } catch (e) {
      PageError.error()
      Alert.show({
        variant: 'danger',
        message: 'Оказия при загрузке брэндов'
      })
    }
  }

}

export default new Brands()