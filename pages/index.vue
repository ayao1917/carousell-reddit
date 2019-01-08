<template>
  <section class="container">
    <b-container class="mt-3">
      <b-row>
        <b-col cols lg="4" v-for="topic in topics" v-bind:key="topic.id">
          <b-card style="max-width: 20rem;"
                  class="mb-2">
            <p class="card-text">
              {{topic.content}}
            </p>
            <b-button variant="danger" @click="">-</b-button>
            {{topic.vote}}
            <b-button variant="success" @click="">+</b-button>
          </b-card>
        </b-col>
      </b-row>
      <b-jumbotron header="No Topics Found" v-if="topics.length === 0">
      </b-jumbotron>
    </b-container>
  </section>
</template>

<script>
export default {
  components: {
  },
  data: () => {
    return {
      topics: []
    }
  },
  watch: {
    topics(newTopic) {
      localStorage.setItem('topics', JSON.stringify(newTopic));
    }
  },
  mounted() {
    if (localStorage.topics) {
      this.topics = JSON.parse(localStorage.getItem('topics'));
    }
  },
}
</script>

<style>
</style>
