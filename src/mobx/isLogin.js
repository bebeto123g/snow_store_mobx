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

  login(root) {
    switch (root) {
      case ('admin'):
        this.isAdmin = true
        return

      case ('manager'):
        this.isManager = true
        return

      default:
        this.isLogin = true
        return
    }
  }

}

export default new isLogin()