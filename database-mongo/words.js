const faker = require('faker');
const {Racer} = require('./index.js');

const generateWord = () => {
  return {
    skill: 'easy',
    words: `${faker.random.word()} ${faker.random.word()}`
  }
}

const seedWords = () => {
  for (let i = 1; i < 200; i++) {
    let racer = new Racer(generateWord());
    racer.save((err) => {
      if (err) {
        console.log('error saving to db');
      }
    });
  }
};

seedWords();