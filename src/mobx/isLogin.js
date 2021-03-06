import { makeAutoObservable } from 'mobx'

class isLogin {
  isLogin = false
  isManager = false
  isAdmin = false

  constructor() {
    makeAutoObservable(this)
  }

  logout() {
    this.isLogin = false
    this.isManager = false
    this.isAdmin = false
  }

  login() {
    this.isLogin = true
  }

  manager() {
    this.isManager = true
  }

  admin() {
    this.isAdmin = true
  }
}

export default new isLogin()