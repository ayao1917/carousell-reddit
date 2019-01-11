<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col col-lg-4" v-for="topic in topics" v-bind:key="topic.id">
        <TopicCard :topic="topic" @after-vote="getTopicList"></TopicCard>
      </div>
    </div>
    <div class="jumbotron" v-if="topics.length === 0">
      <h1 class="display-4">No Topics Found</h1>
    </div>
  </div>
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
