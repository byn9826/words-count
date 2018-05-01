var wordsSplit = require('./globalWordsSplit.js');
var expect = require('chai').expect;

describe('English Basic', function() {
  it('Hello World contains two words', function() {
    expect(wordsSplit('Hello World')).to.deep.equal(['Hello', 'World']);
  });
});

describe('中文基本', function() {
  it('你好，世界 有四个单词', function() {
    expect(wordsSplit('你好，世界')).to.deep.equal(['你', '好', '世', '界']);
  });
});
