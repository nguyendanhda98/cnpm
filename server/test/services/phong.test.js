const app = require('../../src/app');

describe('\'phong\' service', () => {
  it('registered the service', () => {
    const service = app.service('phong');
    expect(service).toBeTruthy();
  });
});
