export const state = () => ({
  topics: [],
});

export const getters = {
  getTopics(state) {
    return state.topics;
  },
  getHots(state) {
    return state.topics.sort((a, b) => {
      if (a.votes < b.votes)
        return -1;
      if (a.votes > b.votes)
        return 1;
      return 0;
    }).slice(0, 20);
  },
};

export const mutations = {
  updateAll(state, topics) {
    state.topics = topics;
  },
  addTopic(state, data) {
    data.id = state.topics.length + 1
    state.topics.push(data);
  },
  updateTopic(state, data) {
    let foundIndex = state.topics.findIndex(x => x.id === data.id);
    state.topics[foundIndex].content = data.content;
    state.topics[foundIndex].votes = data.votes;
  },
};

export const actions = {
};
