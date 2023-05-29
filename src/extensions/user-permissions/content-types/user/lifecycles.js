module.exports = {
  async afterCreate(event) {
    console.log('afterCreate');
    try {
      await strapi.plugins['email'].services.email.send({
        to: 'valid email address',
        from: 'mikuplayer123@gmail.com',
        cc: 'valid email address',
        bcc: 'valid email address',
        replyTo: 'valid email address',
        subject: 'The Strapi Email plugin worked successfully',
        text: '${fieldName}', // Replace with a valid field ID
        html: 'Hello world!',
      });
      ß;
    } catch (err) {
      console.log(err);
    }
  },
  async afterUpdate(event) {
    const { result } = event;
    console.log(event);
    try {
      await strapi.plugins['email'].services.email.send({
        to: 'valid email address',
        from: 'mikuplayer123@gmail.com',
        cc: 'valid email address',
        bcc: 'valid email address',
        replyTo: 'valid email address',
        subject: 'The Strapi Email plugin worked successfully',
        text: '${fieldName}', // Replace with a valid field ID
        html: 'Hello world!',
      });
    } catch (err) {
      console.log(err);
    }
  },
};
