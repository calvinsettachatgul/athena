let mocha = require('mocha');
let assert = require('assert');
let chai = require('chai').expect

let digPow = require('../dig_pow.js');

describe.only('#digPow', function () {
  context('number is 1', function () {
    it('should return true', function () {
      /*
       * 1 ^ 0 == 1 * 0
      */
      assert.equal(digPow(1,0), true);
    });
  })
  context('should fail', function () {
    it('should return false', function () {
      /*
       * 0 ^ 0 !== 1 * 0
      */
      assert.equal(digPow(0,0), false);
    });
  })
  context('sample tests from codewars', function () {
    it('should pass codewars examples1', function () {
      assert.equal(digPow(89, 1), true);
    });
    it('should pass codewars examples2', function () {
      assert.equal(digPow(695, 2), true);
    });
    it('should pass codewars examples3', function () {
      assert.equal(digPow(46288, 3), true);
    });

  });
});

