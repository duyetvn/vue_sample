import { articleList } from '@/backend/articles'
const SET_ARTICLE_LIST = 'SET_ARTICLE_LIST'

const state = {
  articles: []
}

export const mutations = {
  [SET_ARTICLE_LIST] (state, articles) {
    state.articles = articles
  }
}

export const actions = {
  setList ({ commit }, searchParams) {
    return articleList(searchParams).then(response => {
      let artciles = response.data
      commit(SET_ARTICLE_LIST, artciles)
    }).catch(error => {
      console.log(error)
    })
  }
}

export const getters = {
  articleList: state => state.articles
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
