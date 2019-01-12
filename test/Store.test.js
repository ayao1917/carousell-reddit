import { createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import { state, getters, mutations, actions } from '~/store/topic';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Test for Vuex', () => {
  let store;
  let gettersClone = Object.assign({}, getters);
  let mutationsClone = Object.assign({}, mutations);
  let actionsClone = Object.assign({}, actions);

  test('store can add topic', () => {
    store = new Vuex.Store({
      state: state,
      getters: gettersClone,
      mutations: mutationsClone,
      actions: actionsClone,
    });

    expect(store.state.topics.length).toBe(0);
    store.commit('addTopic' ,{id:1, content: 'test', votes: 123});
    expect(store.state.topics.length).toBe(1);
  });

  test('store can update topic', () => {
    store = new Vuex.Store({
      state: () => ({
        topics: [{id: 1, content: 'test123', votes: 123}],
      }),
      getters: gettersClone,
      mutations: mutationsClone,
      actions: actionsClone,
    });

    expect(store.state.topics[0].votes).toBe(123);
    store.commit('updateTopic' ,{id: 1, content: 'test', votes: 222});
    expect(store.state.topics[0].votes).toBe(222);
  });

  test('store can update all', () => {
    store = new Vuex.Store({
      state: () => ({
        topics: [{id: 1, content: 'test123', votes: 123}],
      }),
      getters: gettersClone,
      mutations: mutationsClone,
      actions: actionsClone,
    });

    expect(store.state.topics.length).toBe(1);
    store.commit('updateAll' ,[
      {id: 1, content: 'test', votes: 123},
      {id: 2, content: 'test', votes: 456},
      {id: 3, content: 'test', votes: 789},
      ]);
    expect(store.state.topics.length).toBe(3);
  });
});
