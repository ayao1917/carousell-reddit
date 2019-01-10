<template>
  <b-container class="mt-3">
    <b-row>
      <b-col cols="10">
        <h3>My Topics</h3>
      </b-col>
      <b-col>
        <b-btn size="small" variant="primary" block @click="showAddModal">Add</b-btn>
      </b-col>
    </b-row>
    <b-table class="mt-3" striped hover :items="topics" :fields="fields" v-if="topics.length !== 0">
      <template slot="actions" slot-scope="row">
        <b-button size="sm" @click.stop="showEditModal(row.item, row.index, $event.target)" class="mr-1">
          Edit
        </b-button>
      </template>
    </b-table>
    <b-jumbotron header="No Topics Found" v-if="topics.length === 0">
      <p>Click here to add one</p>
      <b-btn variant="primary" @click="showAddModal">Add</b-btn>
    </b-jumbotron>

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
  </b-container>
</template>

<script>
  import { mapGetters } from 'vuex';
  import Helper from '~/assets/js/helper';

  export default {
    name: "topics",
    data: () => {
      return {
        fields: [
          'content',
          { key: 'votes', label: 'Votes' },
          { key: 'actions', label: 'Actions' }
        ],
        topics: [],
        topicForm: {
          content: ''
        },
        modalType: 'add',
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
        this.topicForm = Helper.clone(item);
        this.$refs.topicModalRef.show();
      },
      hideModal() {
        this.$refs.topicModalRef.hide();
      },
      doAdd() {
        let validateResult = this.validateForm();

        if (!validateResult.success) {
          alert(validateResult.reason);
          return;
        }

        this.$store.commit('topic/addTopic', this.topicForm);
        this.$refs.topicModalRef.hide();
        this.getTopicList();
      },
      doEdit() {
        let validateResult = this.validateForm();

        if (!validateResult.success) {
          alert(validateResult.reason);
          return;
        }

        this.$store.commit('topic/updateTopic', this.topicForm);
        this.$refs.topicModalRef.hide();
        this.getTopicList();
      },
      validateForm() {
        if (this.topicForm.content.length > 255) {
          return {
            success: false,
            reason: 'content should not exceed 255'
          };
        }
        return {success: true};
      },
      getTopicList() {
        this.topics = Helper.clone(this.getTopics);
      },
    },
    created() {
      this.getTopicList();
    },
  }
</script>

<style scoped>

</style>
