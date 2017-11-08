const assert = require('chai').assert;
const { weekDay, snippet, numProps, filterBetween } = require('../function.js');

describe('weekDay', function(){
  it('day returns the day of the week given a date object', function(){
  let halloween = new Date(2017, 9, 31);
  assert.equal(weekDay(halloween), 'Tuesday');
  });

  it('not using date object throws error', function(){
    assert.throws(function(){ weekDay('1') }, TypeError, 'plaese to pass date object');
  });
});

describe('snippet', function(){
  it('returns a snippet of a string', function(){
    assert.equal(snippet('playerplayer',6), 'player...');
  })

  it('returns the whole string if length is less than max length', function(){
    assert.equal(snippet('high', 7), 'high');
  })
})


describe('numProps', function(){
  it('returns the number of keys in an object', function(){
    let cashMoney = {
          hotBoys: 'juve, lil wayne, bg, turk',
          bigTymers: 'Baby, mannie fresh',
          youngMoney: 'drake, nikki minaj, dj khaled'
        }
    assert.equal(numProps(cashMoney), 3);
  })

  it('throws Error if not given an object', function(){
    assert.throws(function(){ numProps('1') }, TypeError, 'i need an object');
  })
})


describe('filterBetween', function(){
  it('filters elements in an array against min and max values', function(){
  let thisArray = [1,2,3,4,5,6];
  assert.deep.equal(filterBetween(thisArray, 2, 5),[2,3,4,5]);
  })
  it('throws an error if not given an array', function(){
    let someNonArray = '1,2,3,4';
    assert.throws(function(){ filterBetween(someNonArray)}), TypeError, 'i need a array';
  })
})
