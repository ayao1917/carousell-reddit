<template>
  <b-card style="max-width: 20rem;"
          class="mb-2">
    <p class="card-text">
      {{topic.content}}
    </p>
    <b-button class="down-vote" variant="danger" @click="doVote(-1, topic)">-</b-button>
    <span class="topic-votes">{{topic.votes}}</span>
    <b-button class="up-vote" variant="success" @click="doVote(1, topic)">+</b-button>
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
        this.$emit('after-vote');
      }
    },
  }
</script>

<style scoped>

</style>
