const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {
    describe('#add', () => {
      it('should add two numbers', () => {
        let res = utils.add(33, 11);
        expect(res).toBe(44).toBeA('number');
      });
    })
  it('should async add two numbers', (done) => {
    utils.asyncAdd(4,3, (sum) => {
      expect(sum).toBe(7).toBeA('number');
      done();
    });
  });
  
  it('should square a number', () => {
    let res = utils.square(5);
    expect(res).toBe(25).toBeA('number');
  });
  
  it('should async square a number', (done) => {
    utils.asyncSquare(5, (sum) => {
      expect(sum).toBe(25).toBeA('number');
      done();
    });
  });
  
  it('should expect some values', () => {
    expect(12).toNotBe(11);
  })
})

it('should verify first and last names are set', () => {
  let user = {location: 'Austin'};
  let res = utils.setName(user, 'Victor Nhem');
  expect(res).toInclude({
    firstName: 'Victor',
  lastName: 'Nhem'
  });
})