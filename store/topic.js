export const state = () => ({
  topics: [],
});

export const getters = {
  getTopics(state) {
    return state.topics;
  },
};

export const mutations = {
  updateAll(state, topics) {
    state.topics = topics;
  },
  updateVote(state, data) {
    let foundIndex = state.topics.findIndex(x => x.id === data.id);
    state.topics[foundIndex].votes = data.votes;
  },
};

export const actions = {
};
