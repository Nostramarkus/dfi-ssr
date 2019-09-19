import ItemService from '~/services/ItemService.js'

export const state = () => ({
  items: [],
  item: {}
})

export const mutations = {
  SET_ITEMS(state, items) {
    state.items = items
  },
  SET_ITEM(state, item) {
    state.item = item
  }
}

export const actions = {
  fetchItems({ commit }) {
    return ItemService.getItems().then(response => {
      commit('SET_ITEMS', response.data)
    })
  },
  fetchItem({ commit }, id) {
    return ItemService.getItem(id).then(response => {
      commit('SET_ITEM', response.data)
    })
  }
}
