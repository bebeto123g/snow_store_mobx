import { makeAutoObservable } from 'mobx'
import { validateForm } from '../hooks/useValidateForm'
import { fetchAuthForm } from '../services/fetchAuthForm'
import isLogin from './isLogin'
import Alert from './Alert'
import Modal from './Modal'
import Orders from './Orders'


class Auth {
  token = null
  userId = null
  errors = null
  profile = null
  form = {
    email: '',
    password: '',
    userName: '',
    tel: ''
  }

  constructor() {
    makeAutoObservable(this)
  }

  login(form) {
    this.form = form
    const { loginValidate, errors } = validateForm(form)
    loginValidate()
      ? this.sendForm('login')
      : this.validateError(errors)
  }

  register(form) {
    this.form = form
    const { registerValidate, errors } = validateForm(form)
    registerValidate()
      ? this.sendForm('register')
      : this.validateError(errors)
  }

  logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('expiresIn')
    localStorage.removeItem('profile')
    localStorage.removeItem('root')

    Modal.hide()

    isLogin.logout()
    Orders.clear()
    this.token = null
    this.message = null
    this.userId = null
    this.errors = null
    this.profile = null
    this.form.password = ''
  }

  autoLogout(time) {
    const tid = setTimeout(() => {
      this.logout()
      clearTimeout(tid)
    }, time)
  }

  async sendForm(type) {
    try {
      const response = await fetchAuthForm(type, this.form)
      this.autoLogout(3600000)

      const { token, userId, message, profile, root } = response.data

      localStorage.setItem('token', token)
      localStorage.setItem('userId', userId)
      localStorage.setItem('expiresIn', String(Date.now() + 3600000))
      localStorage.setItem('profile', JSON.stringify(profile))

      if (root === 'user') {
        localStorage.setItem('root', userId + token)
      }

      Alert.show({
        variant: 'success', message
      })

      this.success({ profile, token, userId, root })
    } catch (e) {
      this.serverError(e)
    }
  }

  success({ profile, token, userId, root = '' }) {
    isLogin.login(root)
    this.form.password = ''
    this.profile = profile
    this.token = token
    this.userId = userId

    const tid = setTimeout(() => {
      Modal.hide()
      clearTimeout(tid)
    }, 500)
  }

  validateError(e) {
    this.errors = e
    this.form.password = ''
  }

  serverError(e) {
    if (!e.response?.data?.message) {
      this.errors = { message: e.message }
      this.form.password = ''

      Alert.show({
        variant: 'danger',
        message: e.message
      })
      return
    }

    const { errors, message } = e.response.data

    let email = null, password = null

    if (errors) {
      errors.forEach(({ param, msg }) => {
        param === 'email' ? (email = msg) : (password = msg)
      })
    }

    this.errors = {
      message, email, password
    }
    this.form.password = ''

    Alert.show({
      variant: 'danger', message
    })
  }

  clearError() {
    this.errors = null
  }

  init() {
    const currentTime = Date.now()
    const root = localStorage.getItem('root')
    const expiresIn = +localStorage.getItem('expiresIn')

    if (!expiresIn || currentTime > expiresIn || !root) {
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
      localStorage.removeItem('expiresIn')
      localStorage.removeItem('profile')
      return
    }

    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('userId')
    const profile = JSON.parse(localStorage.getItem('profile'))

    this.autoLogout(expiresIn - currentTime)

    if (token && userId) {
      this.success({ profile, token, userId })
    }
  }
}

export default new Auth()