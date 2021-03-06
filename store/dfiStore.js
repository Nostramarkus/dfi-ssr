import dfiServices from '~/services/dfiServices.js'


export const state = () => ({
  itemsFetch: [],
  items: [],
  item: {},
  cats: [],
  catsChecked: [],
  itemDetailsFetch: [],
  searchInput: ''
})

//Note to self: mutations moet eigenlijk minder logica in (alleen de state setten). De logica kan eigenlijk beter in actions zitten
export const mutations = {
  SET_ITEMS(state, items) {
    state.items = items
    state.itemsFetch = items
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
    var itemsNew = state.itemsFetch.filter(i =>
      state.catsChecked.includes(i.catId)
    )
    if (state.catsChecked.length === 0) {
      itemsNew = state.itemsFetch
    }
    var searchInput = state.searchInput;
    itemsNew = itemsNew.filter(i =>
      i.titel.toLowerCase().includes(searchInput)
    );
    state.items = itemsNew
  },
  SET_SEARCHINPUT(state, value) {
    state.searchInput = value
    var itemsNew = state.itemsFetch.filter(i =>
      i.titel.toLowerCase().includes(value)
    );
    if (state.catsChecked.length !== 0) {
      itemsNew = itemsNew.filter(i =>
        state.catsChecked.includes(i.catId)
      )
    }
    state.items = itemsNew
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
  },
  updateSearchInput({ commit }, value) {
    commit('SET_SEARCHINPUT', value)
  }
}