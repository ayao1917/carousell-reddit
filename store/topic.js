export const state = () => ({
  topics: [], // the stored topics
});

export const getters = {
  // get all topics
  getTopics(state) {
    return state.topics;
  },
};

export const mutations = {
  // replace topics in state
  updateAll(state, topics) {
    state.topics = topics;
  },
  // add one topic into state
  addTopic(state, data) {
    // find the max id in the topic list
    const maxId = state.topics.length < 1 ? 0 : state.topics.reduce(function(prev, current) {
      return (prev.id > current.id) ? prev : current
    }).id;
    data.id = maxId + 1; // assign a increase id for ne topic
    data.votes = 0;
    state.topics.push(data);
  },
  // replace one topic which has same id with input topic
  updateTopic(state, data) {
    let foundIndex = state.topics.findIndex(x => x.id === data.id); // find topic with a specific id
    state.topics[foundIndex].content = data.content;
    state.topics[foundIndex].votes = data.votes;
  },
  deleteTopic(state, id) {
    let foundIndex = state.topics.findIndex(x => x.id === id); // find topic with a specific id
    state.topics.splice(foundIndex, 1);
  }
};

export const actions = {
  updateAll({commit}, topics) {
    commit('updateAll', topics);
  },
  addTopic({commit}, data) {
    commit('addTopic', data);
  },
  updateTopic({commit}, data) {
    commit('updateTopic', data);
  },
  deleteTopic({commit}, id) {
    commit('deleteTopic', id);
  },
};
