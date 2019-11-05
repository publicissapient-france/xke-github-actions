var expect = require('chai').expect;

describe('dumb-test', function () {
  it('should always be ok', function () {
    var x = 1;
    var y = 1;
    var dumb_result = 2;
    var sum = x + y;
    expect(sum).to.be.equal(dumb_result);
  });
});
