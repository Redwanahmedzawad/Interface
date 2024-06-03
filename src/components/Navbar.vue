<template>
  <nav class="navbar navbar-expand-md navbar-light" style="background-color: #2c3e50;">
    <div class="container-fluid">
      <h1 style="color: #00ffff;">Shower of Aurora</h1>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ml-auto">
          <router-link class="nav-item nav-link" to="/" style="color: #ffffff;">Home</router-link>
          <router-link class="nav-item nav-link" to="/reservation" style="color: #ffffff;">Reservation</router-link>
          <router-link class="nav-item nav-link" to="/menu" style="color: #ffffff;">Menu</router-link>
          <router-link class="nav-item nav-link" to="/online-order" style="color: #ffffff;">Online Order</router-link>
          <router-link class="nav-item nav-link" to="/liquor-menu" style="color: #ffffff;">Liquor Menu</router-link>
          <router-link class="nav-item nav-link" to="/contact-us" style="color: #ffffff;">Contact Us</router-link>
          <router-link class="nav-item nav-link" to="/userhel" style="color: #ffffff;">User</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
};
</script>

<style scoped>
.navbar {
  margin-bottom: 20px;
}
.navbar-nav {
  display: flex;
  flex-direction: row;
}
.nav-item {
  margin-right: 15px;
}
</style>
