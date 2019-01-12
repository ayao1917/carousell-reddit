<!-- The TopicCard component represent each topic, it has vote btn for user to do vote -->

<template>
  <div style="max-width: 20rem;"
          class="card mb-2">
    <div class="card-body">
      <p class="card-text">
        {{topic.content}}
      </p>
      <!-- the btn for user to downvote a topic -->
      <button type="button" class="btn btn-danger down-vote" @click="doVote(-1, topic)">-</button>
      <span class="topic-votes">{{topic.votes}}</span>
      <!-- the btn for user to upvote a topic -->
      <button type="button" class="btn btn-success up-vote" @click="doVote(1, topic)">+</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TopicCard",
    /* the input topic.
     * <number> id: the id of the topic
     * <string> content: the content of the topic
     * <number> votes: the votes of the topic
     * */
    props: ['topic'],
    methods: {
      /*
      * the vote method
      * <number> vote: the number add to the vote
      * <object> topic: the topic object
      * */
      doVote(vote, topic) {
        topic.votes += vote;
        // store new vote to Vuex
        this.$store.dispatch('topic/updateTopic', topic);
      }
    },
  }
</script>

<style scoped>

</style>
