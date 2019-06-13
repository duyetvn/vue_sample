// import Vue from 'vue'
import Axios from './vue-axios/axios'

export function articleList (searchParams) {
  if (searchParams !== undefined) {
    return Axios.get(`/articles?title=${searchParams}`)
  } else {
    return Axios.get(`/articles`)
  }
}
