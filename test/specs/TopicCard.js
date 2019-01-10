import test from 'ava'
import { mount } from '@vue/test-utils'
import TopicCard from '../../components/TopicCard'

let wrapper

const topic = {
  content: 'test123',
  votes: 111
};

test.beforeEach(() => {
  wrapper = mount(TopicCard, {
    propsData: { topic: topic },
  })
});

test('TopicCard.vue snapshot', (t) => {
  t.snapshot({ html: wrapper.html() })
});

test('TopicCard.vue to display topic', (t) => {
  const $content = wrapper.findAll('.card-text').wrappers;
  const $votes = wrapper.findAll('.topic-votes').wrappers;

  t.is($content[0].text(), topic['content']);
  t.is(parseInt($votes[0].text()), topic['votes']);
});
