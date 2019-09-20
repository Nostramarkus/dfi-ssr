import dfiServices from '~/services/dfiServices.js'

export const state = () => ({
  items: [],
  item: {},
  cats: [],
  catsChecked: []
})

export const mutations = {
  SET_ITEMS(state, items) {
    state.items = items
  },
  SET_ITEM(state, item) {
    state.item = item
  },
  SET_CATS(state, cats) {
    state.cats = cats
  },
  SET_CATSCHECKED(state, params) {
    if (params.newArray) {
      state.catsChecked = [params.catId]
    } else {
      const catsChecked = state.catsChecked
      if (!catsChecked.includes(params.catId)) {
        catsChecked.push(params.catId)
      } else {
        const index = catsChecked.indexOf(params.catId)
        if (index > -1) {
          catsChecked.splice(index, 1)
        }
      }
      state.catsChecked = catsChecked
    }
  }
}

export const actions = {
  fetchItems({ commit }) {
    return dfiServices.getItems().then(response => {
      commit('SET_ITEMS', response.data)
    })
  },
  fetchItem({ commit }, id) {
    return dfiServices.getItem(id).then(response => {
      commit('SET_ITEM', response.data)
    })
  },
  fetchCats({ commit }) {
    return dfiServices.getCats().then(response => {
      commit('SET_CATS', response.data)
    })
  },
  updateSetCats({ commit }, params) {
    commit('SET_CATSCHECKED', params)
  }
}
