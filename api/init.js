import axios from 'axios'

// Initialise base url
const api = axios.create({
  baseURL: 'http://api.tvmaze.com/'
})

export default api
