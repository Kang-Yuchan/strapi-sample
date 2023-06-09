'use strict';
module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    strapi.db.lifecycles.subscribe({
      models: ['plugin::users-permissions.user'],
      async afterUpdate(event) {
        if (event.params.data.role) {
          const { disconnect, connect } = event.params.data.role;
          if (disconnect[0].id === 2 && connect[0].id === 1) {
            return await strapi
              .service('plugin::users-permissions.user')
              .sendConfirmationEmail(event.result);
          }
        }
      },
    });
  },
};
