<template>
  <div class="flex-item">
    <nuxt-link to="/JE-MOEDER-55">
      <div class="item-img-wrapper">
        <img src="https://via.placeholder.com/300x200" class="item-img" alt="Titel">
      </div>
      <div class="item-details-wrapper">
        <div class="item-titel">Titel</div>
        <div class="item-prijs">€100,-</div>
        <div class="item-muted">
          19-09-2019
          <br>Bredizza
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<style>
.flex-item {
  width: 30%;
  margin-bottom: 30px;
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.14);
  color: #252525;
}

.flex-item:hover {
  color: #252525;
  text-decoration: none;
  box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.14);
}

.flex-item a,
.flex-item a:hover {
  color: #252525;
  text-decoration: none;
}

.item-img-wrapper {
  display: grid;
  background-color: #f7f7f6;
  text-align: center;
}

.item-img {
  max-width: 100%;
  max-height: 250px;
  margin: auto;
}

.item-details-wrapper {
  padding: 10px;
}

.item-titel {
  font-size: 16px;
  line-height: 1.2;
  margin-bottom: 5px;
}

.item-prijs {
  font-weight: bold;
  margin-bottom: 3px;
}

.item-muted {
  line-height: 1.2;
  font-size: 14px;
  color: #818a95;
  margin-bottom: 3px;
}

@media (max-width: 767px) {
  .flex-item {
    width: 48%;
  }
}
</style>