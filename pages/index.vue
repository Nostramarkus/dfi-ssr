<template>
  <div class="row">
    <div class="col-xl-4">
      <br>
      <h2>Filters</h2>
      <br>
      <ZoekFilters/>
    </div>
    <div class="col-xl-8">
      <br>
      <h2>Resultaten</h2>
      <br>
      <Loader v-if="this.loading"/>
      <div v-else class="flex-wapper">
        <ItemTegel v-for="item in items" :key="item.id" :item="item"/>
        <span v-if="this.items.length === 0">Geen items gevonden...</span>
        <div v-else-if="this.items.length % 3 !== 0" style="width:30%"></div>
      </div>
    </div>
  </div>
</template>


<script>
import Loader from '~/components/Loader.vue'
import ZoekFilters from '~/components/ZoekFilters.vue'
import ItemTegel from '~/components/ItemTegel.vue'
import { mapState } from 'vuex'

export default {
  head() {
    return {
      title: 'Homepage - Design For Interior',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Dit is de DFI homepage gemaakt met Vue.js en Nuxt.js, deze website is gemaakt met SSR techniek (Server Side Rendered)'
        }
      ]
    }
  },
  data() {
    return {
      loading: false
    }
  },
  components: {
    Loader,
    ZoekFilters,
    ItemTegel
  },
  async fetch({ store, error }) {
    if (store.state.dfiStore.itemsFetch.length === 0) {
      try {
        await store.dispatch('dfiStore/fetchItems')
      } catch (e) {
        error({
          statusCode: 503,
          message: 'Kan server niet bereiken'
        })
      }
    }
  },
  computed: mapState({
    items: state => state.dfiStore.items
  })
}
</script>

<style>
.flex-wapper {
  padding: 0;
  margin: 0;
  list-style: none;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-flow: row wrap;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  min-height: 200px;
}
</style>
