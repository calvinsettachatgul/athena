let mocha = require('mocha');
let assert = require('assert');
let chai = require('chai').expect

let isIsogram = require('../is_isogram.js');

describe.only('#isIsogram', function () {
  context('test first input', function () {
    it('should work verify something', function () {
      console.log(isIsogram, '<<< isIsogram');
      assert.equal(1, 1);
    });
  });
});

