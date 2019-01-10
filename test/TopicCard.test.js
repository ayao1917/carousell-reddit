import { mount } from '@vue/test-utils'
import TopicCard from '../components/TopicCard.vue'

const topic = {
  content: 'test123',
  votes: 111
};

describe('Test for TopicCard.vue', () => {
  const wrapper = mount(TopicCard, {
    propsData: { topic: topic },
    stubs: ['b-card', 'b-button'],
  });

  test('TopicCard.vue to display topic', () => {
    const $content = wrapper.find('.card-text');
    const $votes = wrapper.find('.topic-votes');

    expect($content.text()).toBe(topic['content']);
    expect(parseInt($votes.text())).toBe(topic['votes']);
  });

  test('TopicCard.vue can do vote', () => {
    const $upVoteBtn = wrapper.find('.up-vote');
    $upVoteBtn.trigger('click');
    let $votes = parseInt(wrapper.find('.topic-votes').text());
    expect($votes).toBe(topic['votes'] + 1);

    const $downVoteBtn = wrapper.find('.down-vote');
    $downVoteBtn.trigger('click');
    $votes = parseInt(wrapper.find('.topic-votes').text());
    expect($votes).toBe(topic['votes'] - 1);
  });
});

