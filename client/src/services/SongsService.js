import Api from './Api'

export default {
  index (credentials) {
    return Api().get('songs')
  },
  post (song) {
    return Api().post('songs', song)
  }
}
