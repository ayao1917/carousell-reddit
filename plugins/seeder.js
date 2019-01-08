window.onNuxtReady(() => {
  let faker = require('faker');
  let topics = [];
  for (let i = 0;i < 10;i ++) {
    let num = Math.floor(Math.random() * 999) + 1;
    num *= Math.floor(Math.random()*2) === 1 ? 1 : -1;
    topics.push({
      content: faker.lorem.words(),
      vote: num
    });
  }
  localStorage.setItem('topics', JSON.stringify(topics));
  console.log('Nuxt.js is ready and mounted');
});
