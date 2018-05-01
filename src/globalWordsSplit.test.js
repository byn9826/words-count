var wordsSplit = require('./globalWordsSplit.js');
var expect = require('chai').expect;

describe('Simple', function() {
  it('English', function() {
    expect(wordsSplit('Hello World')).to.deep.equal(['Hello', 'World']);
  });
  it('Chinese', function() {
    expect(wordsSplit('你好，世界')).to.deep.equal(['你', '好', '世', '界']);
  });
});

describe('Basic', function() {
  it('English', function() {
    const content = "Google's free service instantly translates words, phrases, and web pages between English and over 100 other languages.";
    expect(wordsSplit(content).length).to.equal(17);
  });
});
