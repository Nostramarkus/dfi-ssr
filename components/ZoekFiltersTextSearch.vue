<template>
  <div class="m-3" style="margin-bottom: 20px !important;">
    <input
      type="text"
      :value="searchInput"
      @keyup="handleInputChange"
      class="form-control"
      placeholder="Zoeken"
      aria-describedby="zoeken"
    >
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState({
    searchInput: state => state.dfiStore.searchInput
  }),
  methods: {
    handleInputChange(e) {
      this.$store.dispatch('dfiStore/updateSearchInput', e.target.value)
    }
  }
}
</script>
