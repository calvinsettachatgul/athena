let mocha = require('mocha');
let assert = require('assert');
let chai = require('chai').expect

let digPow = require('../dig_pow.js');

describe('#digPow', function () {
  context('number is 1', function () {
    it('should return -1', function () {
      /*
       * 1 ^ 0 == 1 * 0
      */
      assert.equal(digPow(1,0), 1);
    });
  })
 context('sample tests from codewars', function () {
   it('should pass codewars examples1', function () {
     assert.equal(digPow(89, 1), 1);
   });
   it('should pass codewars examples2', function () {
     assert.equal(digPow(695, 2), 2);
   });
   it('should pass codewars examples3', function () {
     assert.equal(digPow(46288, 3), 51);
   });

 });
});

