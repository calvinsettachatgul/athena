let mocha = require('mocha');
let assert = require('assert');
let chai = require('chai').expect

let isIsogram = require('../is_isogram.js');

describe('#isIsogram', function () {
  context('letters given', function () {
    context('when the string is an isogram', function() {
      it('should work when only one letter given', function () {
        assert.equal(isIsogram('a'), true);
      });
    });
    context('when the string is not an isogram', function (){
      it('should return false when letters repeat', function () {
        assert.equal(isIsogram('aa'), false);
      });
      context('when repeating letters are non consecutive', function () {
        it('should return false when letters repeat', function () {
          assert.equal(isIsogram('aba'), false);
        });
      })
    })
  })
});

