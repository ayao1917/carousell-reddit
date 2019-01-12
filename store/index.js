export const actions = {
  // this method init the store data, it will called once when the app start
  nuxtClientInit({ commit }, context) {
    let faker = require('faker'); // we use faker to create fake data
    let topics = [];
    for (let i = 0;i < 30;i ++) {
      let num = Math.floor(Math.random() * 999) + 1; // votes will be 1~1000
      num *= Math.floor(Math.random()*2) === 1 ? 1 : -1; // create random positive or negative sign for votes
      topics.push({
        id: i,
        content: faker.lorem.words(), // fake random content
        votes: num
      });
    }
    commit('topic/updateAll', topics); // store topics to Vuex
  }
};
