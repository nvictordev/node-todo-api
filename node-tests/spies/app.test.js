const expect = require('expect');
const rewire = require('rewire');

let app = rewire('./app');

describe('App', () => {
  let db = {
    saveUser: expect.createSpy()
  }
  app.__set__('db', db)
  it('should call the spy correctly', () => {
    let spy = expect.createSpy();
    spy('Victor', 31);
    expect(spy).toHaveBeenCalledWith('Victor', 31);
  });

  it('should call saveUser with user object', () => {
    let email = 'nhemvictor@gmail.com';
    let password = '123abc';

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password})
  });
});