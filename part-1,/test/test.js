const assert = require('chai').assert;
const day = require('../function.js');

describe('day', function(){
  it('day returns the day of the week given a date object', function(){
  let halloween = new Date(2017, 9, 31);
  assert.equal(day(halloween), 'Tuesday');
  });

  it('not using date object throws erro', function(){

  })
})
