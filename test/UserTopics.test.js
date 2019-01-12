import { mount, shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import BootstrapVue from 'bootstrap-vue'
import UserTopics from '../pages/user/topics.vue';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(BootstrapVue);

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
  let actions;
  let getters;
  let store;

  beforeEach(() => {
    getters = {
      getTopics: () => topics,
    };

    actions = {
      addTopic: jest.fn(),
      updateTopic: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
        topic: {
          namespaced: true,
          actions: actions,
          getters: getters
        }
      }
    })
  });

  test('topics.vue to display topics', () => {
    const wrapper = shallowMount(UserTopics, {
      store,
      localVue
    });

    const items = wrapper.findAll('tr').wrappers;

    expect(wrapper.vm.topics.length).toBe(topics.length);
    expect(items.length).toBe(topics.length + 1);
  });

  test('topics.vue can set user to store', () => {
    const wrapper = mount(UserTopics, {
      store,
      localVue
    });

    wrapper.setProps({
      topicForm: {
        'content': 'test',
        'votes': 123
      },
    });

    wrapper.vm.doAdd();
    expect(actions.addTopic).toHaveBeenCalled();
  });
});
