export const actions = {
  nuxtClientInit({ commit }, context) {
    let faker = require('faker');
    let topics = [];
    for (let i = 0;i < 30;i ++) {
      let num = Math.floor(Math.random() * 999) + 1;
      num *= Math.floor(Math.random()*2) === 1 ? 1 : -1;
      topics.push({
        id: i,
        content: faker.lorem.words(),
        votes: num
      });
    }
    commit('topic/updateAll', topics);
  }
}
