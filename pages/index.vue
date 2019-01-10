<template>
  <section class="container">
    <b-container class="mt-3">
      <b-row>
        <b-col cols lg="4" v-for="topic in topics" v-bind:key="topic.id">
          <TopicCard :topic="topic" @after-vote="getTopicList"></TopicCard>
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
  import Helper from '~/assets/js/helper';

  export default {
    components: {
      TopicCard
    },
    data: () => {
      return {
        topics: [],
      }
    },
    computed:{
      ...mapGetters({
        getTopics: 'topic/getTopics',
      }),
    },
    methods: {
      getTopicList() {
        const total = Helper.clone(this.getTopics);
        this.topics = total.sort((a, b) => {
          if (a.votes < b.votes)
            return 1;
          if (a.votes > b.votes)
            return -1;
          return 0;
        }).slice(0, 20);
      }
    },
    created() {
      this.getTopicList();
    },
  }
</script>

<style>
</style>
