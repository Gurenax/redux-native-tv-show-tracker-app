import api from './init'

const fetchShowList = keyword => {
  return api.get(`/search/shows?q=${keyword}`)
}

export default fetchShowList
