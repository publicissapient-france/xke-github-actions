var expect = require('chai').expect;

describe('dumb-test', function () {
  it('should always be ok', function () {
    let x = 1;
    let y = 1;
    let sum = x + y;
    let expected = 2
    expect(sum).to.be.equal(expected);
  });
});
