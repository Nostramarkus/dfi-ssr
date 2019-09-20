import axios from 'axios'

const dfiApi = axios.create({
  baseURL: `https://designforinterior.com/api`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json'
  }
})

export default {
  getItems() {
    return dfiApi.get('/getItems')
  },
  getItem(id) {
    return dfiApi.get('/getItemDetails?item=' + id)
  },
  getCats() {
    return dfiApi.get('/getCats')
  }
}
