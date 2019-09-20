<template>
  <div class="filters">
    <span class="dfi-filter-titel">
      <strong>Categorieën</strong>
      <br>
      {{catsChecked}}
    </span>
    <div class="dfi-filter-inner">
      <div v-for="cat in cats" :key="cat.id" class="dfi-checkbox">
        <input
          :id="cat.id"
          type="checkbox"
          @click="onCatClick(cat.id)"
          :checked="checkThis(cat.id)"
        >
        <label :for="cat.id">{{cat.name}}</label>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState({
    cats: state => state.main.cats,
    catsChecked: state => state.main.catsChecked
  }),
  methods: {
    onCatClick(catId) {
      this.$store.dispatch('main/updateSetCats', {
        catId: catId,
        newArray: false
      })
    },
    checkThis(catId) {
      const catsChecked = this.$store.state.main.catsChecked
      return catsChecked.includes(catId) ? true : false
    }
  }
}
</script>


<style>
.dfi-checkbox {
  font-size: 18px;
  line-height: 0.9;
}

.span_pseudo,
.dfi-checkbox span:before,
.dfi-checkbox span:after {
  content: '';
  display: inline-block;
  background: #fff;
  width: 0;
  height: 0.2rem;
  position: absolute;
  transform-origin: 0% 0%;
}

.dfi-checkbox {
  position: relative;
  height: 2rem;
  display: flex;
  align-items: center;
}

.dfi-checkbox input {
  display: none;
}

.dfi-checkbox input:checked ~ span {
  background: #6c757d;
  border-color: #6c757d;
}

.dfi-checkbox input:checked ~ span:before {
  width: 1rem;
  height: 0.15rem;
  transition: width 0.1s;
  transition-delay: 0.3s;
}

.dfi-checkbox input:checked ~ span:after {
  width: 0.4rem;
  height: 0.15rem;
  transition: width 0.1s;
  transition-delay: 0.2s;
}

.dfi-checkbox input:disabled ~ span {
  background: #ececec;
  border-color: #dcdcdc;
}

.dfi-checkbox input:disabled ~ label {
  color: #dcdcdc;
}

.dfi-checkbox input:disabled ~ label:hover {
  cursor: default;
}

.dfi-checkbox label {
  padding-left: 2rem;
  position: relative;
  z-index: 2;
  cursor: pointer;
  margin-bottom: 0;
}

.dfi-checkbox span {
  display: inline-block;
  width: 1.2rem;
  height: 1.2rem;
  border: 2px solid #ccc;
  position: absolute;
  left: 0;
  transition: all 0.2s;
  z-index: 1;
  box-sizing: content-box;
  top: 6px;
}

.dfi-checkbox span:before {
  transform: rotate(-55deg);
  top: 1rem;
  left: 0.37rem;
}

.dfi-checkbox span:after {
  transform: rotate(45deg);
  bottom: 0.35rem;
  left: 0.2rem;
}
</style>