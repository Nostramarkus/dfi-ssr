<template>
  <div>
    <b-navbar class="font-bebas" toggleable="lg" type="dark" variant="dfi" fixed="top">
      <div class="container">
        <b-navbar-brand to="/">
          <img
            src="https://designforinterior.com//assets/img/logo_menu.svg"
            class="logo-menu"
            alt="Logo"
          >
        </b-navbar-brand>
        <b-navbar-toggle target="navbarDesignForInterior">
          <font-awesome-icon icon="bars" class="dfi-hamburger"/>
        </b-navbar-toggle>
        <b-collapse id="navbarDesignForInterior" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown text="Koop design items" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>
            <div
              class="d-none d-lg-block"
            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <b-nav-item-dropdown text="Verkoop design items" right>
              <b-dropdown-item to="/item">Inloggen</b-dropdown-item>
              <b-dropdown-item href="#">Account aanmaken</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {}
</script>

<style>
.bg-dfi {
  background-color: #252525;
}

.logo-menu {
  width: 75px;
}
.navbar {
  padding: 0.3rem 1rem;
}

.navbar-dark .navbar-nav .nav-link {
  color: rgb(255, 255, 255);
}
.nav-link {
  padding-top: 10px;
}

.dfi-hamburger-btn {
  padding: 0;
  border-color: transparent !important;
  margin-top: 1px;
}

.dfi-hamburger {
  font-size: 32px;
}

.dropdown-menu {
  background-color: #252525;
  border-radius: 0;
  color: #ffffff;
  border: none;
}

.dropdown-item {
  color: #ffffff;
}

.dropdown-item:focus,
.dropdown-item:hover {
  color: rgba(255, 255, 255, 0.75);
  background-color: transparent;
}

.navbar-dark .navbar-toggler {
  border-color: transparent;
}

@media (max-width: 991px) {
  #navbarDesignForInterior {
    margin: 15px 0;
  }
}
</style>
