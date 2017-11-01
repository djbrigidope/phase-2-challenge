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

  it('takes a string', function(){

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

  })
})
