<!-- This page is the home page of this site, it shows the highest 20 votes topics -->

<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col col-lg-4" v-for="topic in topics" v-bind:key="topic.id">
        <!-- use TopicCard component to display a topic -->
        <TopicCard :topic="topic" @after-vote="getTopicList"></TopicCard>
      </div>
    </div>

    <!-- show if there's no any topics -->
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
        // clone topic list form store to prevent changing the origin topic in store
        const total = Helper.clone(this.getTopics);
        // we sort the topics by its votes, desc
        this.topics = total.sort((a, b) => {
          if (a.votes < b.votes)
            return 1;
          if (a.votes > b.votes)
            return -1;
          return 0;
        }).slice(0, 20); // take top 20 topics
      }
    },
    created() {
      // load topics from store when the page created
      this.getTopicList();
    },
  }
</script>

<style>
</style>
