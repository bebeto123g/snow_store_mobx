import { makeAutoObservable } from 'mobx'
import Auth from './Auth'


class Modal {
  isShow = false
  type = ''

  constructor() {
    makeAutoObservable(this)
  }

  show(type) {
    this.isShow = true
    this.type = type
  }

  hide() {
    this.isShow = false
    this.type = ''
    Auth.clearError()
  }
}

export default new Modal()