var wordsSplit = require('./globalWordsSplit.js');
var expect = require('chai').expect;

describe('Simple', function() {
  it('English', function() {
    expect(wordsSplit('Hello World').length).to.equal(2);
  });
  it('Chinese', function() {
    expect(wordsSplit('你好，世界').length).to.equal(4);
  });
  it('English-Chinese', function() {
    expect(wordsSplit('Hello, 你好。').length).to.equal(3);
  });
});

describe('Basic', function() {
  it('English', function() {
    const content = "Google's free service instantly translates words, phrases, and web pages between English and over 100 other languages.";
    expect(wordsSplit(content).length).to.equal(17);
  });
});
