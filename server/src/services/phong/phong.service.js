// Initializes the `phong` service on path `/phong`
const { Phong } = require('./phong.class');
const createModel = require('../../models/phong.model');
const hooks = require('./phong.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/phong', new Phong(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('phong');

  service.hooks(hooks);
};
