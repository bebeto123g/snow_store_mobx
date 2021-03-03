import { makeAutoObservable } from 'mobx'


class Alert {
  isAlert = false
  tid = null
  variant = ''
  message = ''

  constructor() {
    makeAutoObservable(this)
  }

  show({ variant, message }) {
    const tid = setTimeout(() => {
      this.hide()
      clearTimeout(tid)
    }, 3000)

    this.isAlert = true
    this.tid = tid
    this.variant = variant || 'secondary'
    this.message = message || 'Непредвиденная Оказия!'
  }

  hide() {
    clearTimeout(this.tid)
    this.isAlert = false
    this.tid = null
    this.variant = ''
    this.message = ''
  }
}

export default new Alert()