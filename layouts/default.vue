<template>
  <div>
    <Menu/>
    <main class="container bg-white main mb-5">
      <nuxt/>
    </main>
  </div>
</template>

<script>
import Menu from '~/components/Menu.vue'

export default {
  components: {
    Menu
  },
  beforeCreate: function() {
    this.$store.dispatch('dfiStore/fetchCats')
  }
}
</script>


<style>
@font-face {
  font-family: 'BebasNeueCyrillic';
  src: url('../assets/fonts/BebasNeueCyrillic.eot?#iefix')
      format('embedded-opentype') url('../assets/fonts/BebasNeueCyrillic.otf')
      format('opentype'),
    url('../assets/fonts/BebasNeueCyrillic.woff') format('woff'),
    url('../assets/fonts/BebasNeueCyrillic.ttf') format('truetype'),
    url('../assets/fonts/BebasNeueCyrillic.svg#BebasNeueCyrillic') format('svg');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Palanquin-Regular';
  src: url('../assets/fonts/Palanquin-Regular.eot?#iefix')
      format('embedded-opentype'),
    url('../assets/fonts/Palanquin-Regular.otf') format('opentype'),
    url('../assets/fonts/Palanquin-Regular.woff') format('woff'),
    url('../assets/fonts/Palanquin-Regular.ttf') format('truetype'),
    url('../assets/fonts/Palanquin-Regular.svg#Palanquin-Regular') format('svg');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Palanquin-Regular'; /* bold */
  src: url('../assets/fonts/PalanquinDark-Bold.eot?#iefix')
      format('embedded-opentype'),
    url('../assets/fonts/PalanquinDark-Bold.otf') format('opentype'),
    url('../assets/fonts/PalanquinDark-Bold.woff') format('woff'),
    url('../assets/fonts/PalanquinDark-Bold.ttf') format('truetype'),
    url('../assets/fonts/PalanquinDark-Bold.svg#PalanquinDark-Bold')
      format('svg');
  font-weight: bold;
  font-style: normal;
}

.font-bebas {
  font-family: 'BebasNeueCyrillic';
}

body {
  margin: 0;
  font-family: 'Palanquin-Regular' !important;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  color: #252525;
  text-align: left;
  background-color: #e7e7e7;
}

*:focus {
  outline: none !important;
}

/*
* {
  -webkit-border-radius: 0 !important;
     -moz-border-radius: 0 !important;
          border-radius: 0 !important;
}
*/

::-moz-selection {
  background: #e7e7e7;
}

::selection {
  background: #e7e7e7;
}

.btn.focus,
.btn:focus {
  box-shadow: 0 0 0 0.2rem rgb(231, 231, 231);
}

.h2,
h2 {
  font-size: 2.5rem;
}

.dfi-494949,
.dfi-494949:hover {
  color: #494949;
}

.dfi-252525,
.dfi-252525:hover {
  color: #252525;
}

input[type='number'] {
  -moz-appearance: textfield;
}

input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.form-control:focus {
  color: #495057;
  background-color: #fff;
  border-color: #e7e7e7;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgb(231, 231, 231);
}

.App {
  background-color: #e7e7e7;
}
.bg-white {
  background-color: white;
}
.main {
  padding: 0 30px;
  margin-top: 55px;
}

.dfi-bg {
  background-color: #252525;
}
</style>
