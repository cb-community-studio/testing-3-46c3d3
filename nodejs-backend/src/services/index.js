const users = require("./users/users.service.js");
const testing = require("./testing/testing.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(testing);
  // ~cb-add-configure-service-name~
};
