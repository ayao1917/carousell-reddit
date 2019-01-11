import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import BootstrapVue from 'bootstrap-vue'
import UserTopics from '../pages/user/topics.vue';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(BootstrapVue);

const stubs = ['b-container', 'b-row', 'b-col', 'b-btn', 'b-table', 'b-jumbotron', 'b-modal', 'b-form', 'b-form-group', 'b-form-textarea'];

const topics = [
  {
    content: 'topic1',
    votes: 111
  },
  {
    content: 'topic2',
    votes: 222
  },
  {
    content: 'topic3',
    votes: 333
  }
];

describe('Test for page user/topics.vue', () => {
  let getters;
  let store;

  beforeEach(() => {
    getters = {
      getTopics: () => topics,
    };

    store = new Vuex.Store({
      modules: {
        topic: {
          namespaced: true,
          getters: getters
        }
      }
    })
  });

  test('topics.vue to display topics', () => {
    const wrapper = shallowMount(UserTopics, {
      stubs,
      store,
      localVue
    });

    const items = wrapper.findAll('tr').wrappers;

    expect(items.length).toBe(topics.length + 1);
  });
});
