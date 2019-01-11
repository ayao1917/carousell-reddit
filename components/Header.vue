<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <span class="navbar-brand">Carousell-Reddit</span>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <span class="nav-link header-link" @click="goHomePage">Home</span>
        </li>
        <li class="nav-item active">
          <span class="nav-link header-link" @click="goTopicPage">Topic Management</span>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "Header",
    methods: {
      goHomePage() {
        this.$router.push({name: 'index'});
      },
      goTopicPage() {
        this.$router.push({name: 'user-topics'});
      },
    }
  }
</script>

<style scoped>
.header-link {
  cursor: pointer;
}
</style>
