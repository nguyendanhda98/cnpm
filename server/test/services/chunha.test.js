const app = require('../../src/app');

describe('\'chunha\' service', () => {
  it('registered the service', () => {
    const service = app.service('chunha');
    expect(service).toBeTruthy();
  });
});
