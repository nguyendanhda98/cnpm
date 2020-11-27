const app = require('../../src/app');

describe('\'taikhoan\' service', () => {
  it('registered the service', () => {
    const service = app.service('taikhoan');
    expect(service).toBeTruthy();
  });
});
