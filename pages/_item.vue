<template>
  <div>
    <div class="dfi-a-terug-wrapper">
      <nuxt-link to="/" class="dfi-a-terug">
        <font-awesome-icon icon="chevron-left"/>&nbsp;TERUG
      </nuxt-link>
    </div>
    <div class="row">
      <div class="col-lg-6 order-lg-2">
        <div class="dfi-bekijk-product-prijs">€&nbsp;{{formatPrijs(item.prijs)}}</div>
        <div class="dfi-foto-wrapper">
          <img :src="item.img" :alt="item.titel" class="img-fluid dfi-gallery">
        </div>
        <br>
        <br>
      </div>
      <div class="col-lg-6">
        <h2>{{item.titel}}</h2>
        <table class="dfi-item-info-table">
          <tbody>
            <tr>
              <td>
                <strong>Geplaatst</strong>
              </td>
              <td>{{formatDatum(item.geplaatstDt)}}</td>
            </tr>
            <tr>
              <td>
                <strong>Conditie</strong>
              </td>
              <td>{{item.conditie}}</td>
            </tr>
            <tr>
              <td>
                <strong>Verkoper</strong>
              </td>
              <td>{{item.verkoper}}</td>
            </tr>
            <tr>
              <td>
                <strong>Lid sinds</strong>
              </td>
              <td>{{formatDatum(item.verkoperSinds)}}</td>
            </tr>
            <tr>
              <td>
                <strong>Woonplaats</strong>&nbsp;&nbsp;&nbsp;
              </td>
              <td>{{item.woonplaats}}</td>
            </tr>
            <tr>
              <td colspan="2"></td>
            </tr>
          </tbody>
        </table>
        <strong>Omschrijving</strong>
        <br>
        <p>
          {{item.oms}}
          <br>
        </p>
        <br>
      </div>
    </div>

    <hr>

    <br>
    <br>
    <div class="row">
      <div class="col-md-4">
        <img
          src="https://designforinterior.com/assets/img/logo-dfi.svg"
          class="dfi-logo-item-page"
          alt="Design For Interior"
        >
        <br>
        <br>
        <br>
      </div>
      <div class="col-md-8">
        <h2>Koop &amp; verkoop jouw design items</h2>
        <p>
          Design For Interior is er voor interieurprofessionals en
          consumenten die blij worden van design items. Voor diegenen die
          een liefde hebben voor stijlvolle &amp; elegante interieurs.
          Jij, Wij, Iedereen. Design For Interior maakt daarom de koop
          &amp; verkoop van deze design items mogelijk. Vind via dit
          platform dat unieke kunstwerk of meubel om jouw inrichting
          compleet te maken. Ontdek iedere dag iets nieuws, iets anders,
          iets bijzonders!
        </p>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import moment from 'moment'

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
      await store.dispatch('dfiStore/fetchItem', itemId)
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Kan server niet bereiken'
      })
    }
  },
  computed: mapState({
    item: state => state.dfiStore.item
  }),
  methods: {
    formatPrijs(prijs) {
      const fprijs = prijs
        .toFixed(2)
        .toString()
        .replace('.', ',')
        .replace(',00', ',-')
      return fprijs
    },
    formatDatum(datum) {
      return moment(String(datum)).format('DD-MM-YYYY')
    }
  }
}
</script>

<style>
.dfi-a-terug-wrapper {
  padding: 40px 0 30px 0;
}
.dfi-a-terug {
  color: rgba(73, 73, 73, 0.8);
}
.dfi-a-terug:hover {
  color: #252525;
  text-decoration: none;
}
.dfi-bekijk-product-prijs {
  background-color: #494949;
  position: absolute;
  right: 0;
  float: right;
  text-align: right;
  margin-top: 20px;
  z-index: 1;
  font-weight: bold;
  color: white;
  line-height: 1;
  font-size: 27px;
  padding: 4px 8px 10px 8px;
  border-radius: 3px;
}
.dfi-foto-wrapper {
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.14);
  transition: 0.3s;
  border-radius: 5px;
  margin-top: 5px;
}
.dfi-gallery {
  min-width: 100%;
}
.dfi-item-info-table {
  margin: 20px 0 50px 0;
}
.dfi-logo-item-page {
  padding: 0px 30px;
  width: 100%;
}
</style>
