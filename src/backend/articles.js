// import Vue from 'vue'
import Axios from './vue-axios/axios'

export function articleList () {
  return Axios.get('/articles')
}
