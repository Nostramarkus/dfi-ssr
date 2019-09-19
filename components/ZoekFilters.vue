<template>
  <div class="filtersWrapper">
    <ZoekFiltersTextSearch/>
    <ZoekFiltersCats/>
  </div>
</template>

<script>
import ZoekFiltersTextSearch from '~/components/ZoekFiltersTextSearch.vue'
import ZoekFiltersCats from '~/components/ZoekFiltersCats.vue'

export default {
  components: {
    ZoekFiltersTextSearch,
    ZoekFiltersCats
  }
}
</script>

<style>
.filtersWrapper {
  background-color: #f7f7f7;
  padding: 5px 5px 0.1px 5px;
}
.filters {
  background-color: #ffffff;
  padding: 15px;
  margin-bottom: 5px;
}
.dfi-filter-inner {
  margin: 5px;
}
.dfi-filter-titel {
  font-size: 18px;
}
</style>
