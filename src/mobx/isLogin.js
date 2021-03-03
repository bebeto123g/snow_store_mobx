import { makeAutoObservable } from 'mobx'

class isLoginStore {
  isLogin = false

  constructor() {
    makeAutoObservable(this)
  }

  login() {
    this.isLogin = true
  }

  logout() {
    this.isLogin = false
  }
}

export default new isLoginStore()