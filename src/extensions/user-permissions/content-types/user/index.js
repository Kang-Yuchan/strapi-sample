const lifecycles = require('./lifecycles.js');
const permissionService = strapi.service(
  'plugin::users-permissions.permission',
);
console.log(permissionService);
module.exports = {
  lifecycles,
};
