import axios from 'axios'

const apiClient = axios.create({
  baseURL: `https://designforinterior.com/api`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json'
  }
})

export default {
  getItems() {
    return apiClient.get('/getItems')
  },
  getItem(id) {
    return apiClient.get('/getItemDetails?item=' + id)
  }
}
