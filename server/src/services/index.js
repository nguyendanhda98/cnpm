const taikhoan = require('./taikhoan/taikhoan.service.js');
const phong = require('./phong/phong.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(taikhoan);
  app.configure(phong);
};
