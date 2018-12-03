const faker = require('faker');
const fs = require('fs');
const path = require('path');

const streamWord = fs.createWriteStream(path.join(__dirname, 'word.tsv'));
const fakeWordData = (i) => {
  for (;i <= 10; i++) {
    let skill = 'easy'; 
    let words = faker.lorem.words();
    if (!streamWord.write(`${skill}\t${words}\n`)) {
      streamWord.once('drain', () => {
        fakeWordData(i + 1);
      });
      return;
    }
  }
  streamWord.end();
};
fakeWordData(1);
