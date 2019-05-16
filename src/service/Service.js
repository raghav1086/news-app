import axios from 'axios'
import Config from '../config'

class Service {
  fetchNewsData() {
    return axios
        .get(Config.API_URL)
        .then(response => {
            let data = response.data.articles
            return data ? data : undefined
        })
        .catch(err => console.log(err))
  }
}

const service = new Service()

export default service