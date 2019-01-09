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
            <b-button variant="danger" @click="doVote(-1, topic)">-</b-button>
            {{topic.votes}}
            <b-button variant="success" @click="doVote(1, topic)">+</b-button>
          </b-card>
        </b-col>
      </b-row>
      <b-jumbotron header="No Topics Found" v-if="topics.length === 0">
      </b-jumbotron>
    </b-container>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    components: {
    },
    data: () => {
      return {
      }
    },
    computed:{
      ...mapGetters({
        getTopics: 'topic/getTopics',
      }),
      topics() {
        return this.getTopics.slice().sort((a, b) => {
          if (a.votes < b.votes)
            return 1;
          if (a.votes > b.votes)
            return -1;
          return 0;
        }).slice(0, 20);
      }
    },
    methods: {
      doVote(vote, topic) {
        let sum = topic.votes + vote;
        this.$store.commit('topic/updateTopic', {id: topic.id, content: topic.content, votes: sum});
      }
    },
    created() {
    },
  }
</script>

<style>
</style>
