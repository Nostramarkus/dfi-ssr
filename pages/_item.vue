<template>
  <div>
    <h1>Item details</h1>
    {{item}}
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  head() {
    return {
      title: this.item.titel + ' - Design For Interior',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            this.item.oms +
            'Dit is de DFI item details pagina gemaakt met Vue.js en Nuxt.js, deze website is gemaakt met SSR techniek (Server Side Rendered)'
        }
      ]
    }
  },
  async fetch({ store, error, params }) {
    const itemUrl = params.item
    const lastIndex = itemUrl.lastIndexOf('-')
    const itemId = itemUrl.substring(lastIndex + 1)
    try {
      await store.dispatch('items/fetchItem', itemId)
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Kan server niet bereiken'
      })
    }
  },
  computed: mapState({
    item: state => state.items.item
  })
}
</script>
