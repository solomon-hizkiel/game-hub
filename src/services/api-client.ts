import axios from 'axios'

export default axios.create({
  baseURL:'https://api.rawg.io/api',
  params:{
    key:'ffd3335c5d774bd4b6f8a94261dd0400'
  }
})