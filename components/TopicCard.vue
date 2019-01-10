<template>
  <b-card style="max-width: 20rem;"
          class="mb-2">
    <p class="card-text">
      {{topic.content}}
    </p>
    <b-button variant="danger" @click="doVote(-1, topic)">-</b-button>
    <div class="topic-votes">{{topic.votes}}</div>
    <b-button variant="success" @click="doVote(1, topic)">+</b-button>
  </b-card>
</template>

<script>
  export default {
    name: "TopicCard",
    props: ['topic'],
    methods: {
      doVote(vote, topic) {
        let sum = topic.votes + vote;
        this.$store.commit('topic/updateTopic', {id: topic.id, content: topic.content, votes: sum});
      }
    },
  }
</script>

<style scoped>

</style>
