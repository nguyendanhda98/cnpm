// Initializes the `chunha` service on path `/chunha`
const { Chunha } = require('./chunha.class');
const createModel = require('../../models/chunha.model');
const hooks = require('./chunha.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/chunha', new Chunha(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('chunha');

  service.hooks(hooks);
};
