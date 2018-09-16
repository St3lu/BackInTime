import Api from './Api'

export default {
  async register (credentials) {
    try {
      await Api().post('register', credentials)
      return
    } catch (err) {
      return err.response.data.error
    }
  },
  async login (credentials) {
    try {
      return {token: await Api().post('login', credentials)}
    } catch (err) {
      return {error: err.response.data.error}
    }
  }
}
