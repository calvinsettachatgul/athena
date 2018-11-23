let mocha = require('mocha');
let assert = require('assert');
let chai = require('chai').expect

let isIsogram = require('../is_isogram.js');

describe('#isIsogram', function () {
  context('letters given', function () {
    it('should work when only one letter given', function () {
      assert.equal(isIsogram('a'), true);
    });
  });
});

