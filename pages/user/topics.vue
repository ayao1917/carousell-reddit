<!-- This page is the topic management page -->

<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col col-10">
        <h3>Topic Management</h3>
      </div>
      <div class="col">
        <!-- this btn will call show modal method -->
        <button type="button" class="btn btn-primary" @click="showAddModal">ADD</button>
      </div>
    </div>
    <table class="table table-striped">
      <thead>
      <tr>
        <th scope="col">Content</th>
        <th scope="col">Votes</th>
        <th scope="col">Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="topic in topics" v-bind:key="topic.id">
        <td>{{topic.content}}</td>
        <td>{{topic.votes}}</td>
        <td>
          <b-button size="sm" @click.stop="showEditModal(topic)" class="mr-1">
            Edit
          </b-button>
        </td>
      </tr>
      </tbody>
    </table>

    <!-- show if there's no any topics -->
    <div class="jumbotron" v-if="topics.length === 0">
      <h1 class="display-4">No Topics Found</h1>
      <p>Click here to add one</p>
      <b-btn variant="primary" @click="showAddModal">Add</b-btn>
    </div>

    <!-- the modal contains the topic form -->
    <b-modal ref="topicModalRef" hide-footer title="Add Topic">
      <div class="d-block text-center">
        <b-form>
          <b-form-group label="Content"
                        label-for="contentInput">
            <b-form-textarea id="contentInput"
                             v-model="topicForm.content"
                             placeholder="Enter something"
                             :rows="3"
                             :max-rows="6">
            </b-form-textarea>
          </b-form-group>
        </b-form>
      </div>
      <b-btn class="mt-5" variant="outline-primary" block @click="doAdd" v-if="modalType === 'add'">Add</b-btn>
      <b-btn class="mt-5" variant="outline-primary" block @click="doEdit" v-if="modalType === 'edit'">Update</b-btn>
      <b-btn class="mt-3" variant="outline-danger" block @click="hideModal">Cancel</b-btn>
    </b-modal>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import Helper from '~/assets/js/helper';

  export default {
    name: "topics",
    data: () => {
      return {
        topics: [],
        topicForm: {
          content: ''
        },
        modalType: 'add', // the param determine whether add/edit topic
      }
    },
    computed:{
      ...mapGetters({
        getTopics: 'topic/getTopics',
      }),
    },
    methods: {
      showAddModal() {
        this.modalType = 'add';
        this.$refs.topicModalRef.show();
      },
      showEditModal(item) {
        this.modalType = 'edit';
        // we clone the topic object to prevent changing the origin topic
        this.topicForm = Helper.clone(item);
        this.$refs.topicModalRef.show();
      },
      hideModal() {
        this.$refs.topicModalRef.hide();
      },
      doAdd() {
        let validateResult = this.validateForm();

        // do form validation
        if (!validateResult.success) {
          alert(validateResult.reason);
          return;
        }

        // store new topic to Vuex
        this.$store.dispatch('topic/addTopic', this.topicForm);
        this.$refs.topicModalRef.hide();
        this.getTopicList(); // reload topic list
      },
      doEdit() {
        let validateResult = this.validateForm();

        // do form validation
        if (!validateResult.success) {
          alert(validateResult.reason);
          return;
        }

        // update a topic to Vuex
        this.$store.dispatch('topic/updateTopic', this.topicForm);
        this.$refs.topicModalRef.hide();
        this.getTopicList(); // reload topic list
      },
      /*
      * validate the input topic is correct
      * */
      validateForm() {
        // the topic content should less than 255 character
        if (this.topicForm.content.length > 255) {
          return {
            success: false,
            reason: 'content should not exceed 255'
          };
        }
        return {success: true};
      },
      getTopicList() {
        // clone topic list form store to prevent changing the origin topic in store
        this.topics = Helper.clone(this.getTopics);
      },
    },
    created() {
      // load topics from store when the page created
      this.getTopicList();
    },
  }
</script>

<style scoped>

</style>
