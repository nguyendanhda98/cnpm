// Initializes the `taikhoan` service on path `/taikhoan`
const { Taikhoan } = require('./taikhoan.class');
const createModel = require('../../models/taikhoan.model');
const hooks = require('./taikhoan.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/taikhoan', new Taikhoan(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('taikhoan');

  service.hooks(hooks);
};
