let mocha = require('mocha');
let assert = require('assert');
let chai = require('chai').expect

let matrixAddition = require('../matrix_addition.js');

describe('#matrixAddtion', function () {
  context('first case', function () {
    it('should work verify something', function () {
      console.log(matrixAddition);
      assert.equal(1, 1);
    });
  });
});

