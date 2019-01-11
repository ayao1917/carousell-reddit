<template>
  <div style="max-width: 20rem;"
          class="card mb-2">
    <div class="card-body">
      <p class="card-text">
        {{topic.content}}
      </p>
      <button type="button" class="btn btn-danger down-vote" @click="doVote(-1, topic)">-</button>
      <span class="topic-votes">{{topic.votes}}</span>
      <button type="button" class="btn btn-success up-vote" @click="doVote(1, topic)">+</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TopicCard",
    props: ['topic'],
    methods: {
      doVote(vote, topic) {
        let sum = topic.votes + vote;
        console.log('click', sum);
        this.$store.dispatch('topic/updateTopic', {id: topic.id, content: topic.content, votes: sum});
        this.$emit('after-vote');
      }
    },
  }
</script>

<style scoped>

</style>
