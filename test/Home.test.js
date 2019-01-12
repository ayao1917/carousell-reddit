import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Home from '../pages/index.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

let topics = [];

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

  test('index.vue to display message when no topics', () => {
    const wrapper = shallowMount(Home, {
      store,
      localVue
    });

    expect(wrapper.html()).toContain('No Topics Found');
  });

  test('index.vue to display topics', () => {
    topics = [
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

    const wrapper = shallowMount(Home, {
      store,
      localVue
    });

    const items = wrapper.findAll('topiccard-stub').wrappers;

    expect(wrapper.vm.topics.length).toBe(topics.length);
    expect(items.length).toBe(topics.length);
  });
});
