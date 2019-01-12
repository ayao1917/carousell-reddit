import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import TopicCard from '../components/TopicCard.vue';

const topic = {
  content: 'test123',
  votes: 111
};

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Test for TopicCard.vue', () => {
  let actions;
  let store;

  beforeEach(() => {
    actions = {
      updateTopic: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
        topic: {
          namespaced: true,
          state: {},
          actions
        }
      }
    })
  });

  test('TopicCard.vue to display topic', () => {
    const wrapper = shallowMount(TopicCard, {
      propsData: { topic: topic },
      localVue
    });

    const content = wrapper.find('.card-text');
    const votes = wrapper.find('.topic-votes');

    expect(content.text()).toBe(topic['content']);
    expect(parseInt(votes.text())).toBe(topic['votes']);
  });

  test('TopicCard.vue can do vote', () => {
    const wrapper = shallowMount(TopicCard, {
      propsData: { topic: topic },
      store,
      localVue,
    });

    const upVoteBtn = wrapper.find('.up-vote');
    upVoteBtn.trigger('click');
    expect(actions.updateTopic).toHaveBeenCalled();

    const downVoteBtn = wrapper.find('.down-vote');
    downVoteBtn.trigger('click');
    expect(actions.updateTopic).toHaveBeenCalled();
  });
});

