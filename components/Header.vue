<!-- The Header component contains the navbar above every page -->

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <span class="navbar-brand">Carousell-Reddit</span>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <!-- The link will link to pages/index -->
          <nuxt-link class="nav-link header-link" to="/">Home</nuxt-link>
        </li>
        <li class="nav-item active">
          <!-- The link will link to pages/user/topics -->
          <nuxt-link class="nav-link header-link" to="/user/topics">Topic Management</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "Header",
    methods: {
    }
  }
</script>

<style scoped>
.header-link {
  cursor: pointer;
}
</style>
