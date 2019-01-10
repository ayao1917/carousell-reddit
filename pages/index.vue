<template>
  <section class="container">
    <b-container class="mt-3">
      <b-row>
        <b-col cols lg="4" v-for="topic in topics" v-bind:key="topic.id">
          <TopicCard :topic="topic"></TopicCard>
        </b-col>
      </b-row>
      <b-jumbotron header="No Topics Found" v-if="topics.length === 0">
      </b-jumbotron>
    </b-container>
  </section>
</template>

<script>
  import TopicCard from '~/components/TopicCard';
  import { mapGetters } from 'vuex';

  export default {
    components: {
      TopicCard
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
    },
    created() {
    },
  }
</script>

<style>
</style>
