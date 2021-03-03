import { makeAutoObservable } from 'mobx'
import Alert from './Alert'
import { fetchBrandList } from '../services/fetchBrandlist'


class Brands {
  brands = null

  constructor() {
    makeAutoObservable(this)
  }

  async load() {
    try {
      this.brands = await fetchBrandList()
    } catch (e) {
      Alert.show({
        variant: 'danger',
        message: 'Оказия при загрузке брэндов'
      })
    }
  }

}

export default new Brands()