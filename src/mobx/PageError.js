import { makeAutoObservable } from 'mobx'


class PageError {
  isError = false

  constructor() {
    makeAutoObservable(this)
  }

  error() {
    this.isError = true
  }

  clear() {
    this.isError = false
  }
}

export default new PageError()