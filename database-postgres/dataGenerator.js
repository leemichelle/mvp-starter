const faker = require('faker');
const randomWords = require('random-english-words')
const fs = require('fs');
const path = require('path');

const streamWord = fs.createWriteStream(path.join(__dirname, 'word.tsv'));
const fakeWordData = (i) => {
  for (;i <= 10; i++) {
    let id = i;
    let skill = 'easy'; 
    let words = `${faker.random.word()} ${faker.random.word()}`;
    if (!streamWord.write(`${id}\t${skill}\t${words}\n`)) {
      streamWord.once('drain', () => {
        fakeWordData(i + 1);
      });
      return;
    }
  }
  streamWord.end();
};
fakeWordData(1);
