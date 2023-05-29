const crypto = require('crypto');

module.exports = ({ env }) => ({
  i18n: true,
  'strapi-plugin-ja-pack': {
    enabled: true,
  },
  'users-permissions': {
    config: {
      jwtSecret:
        env('JWT_SECRET') ||
        crypto.randomBytes(16).toString('base64'),
    },
  },
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST'),
        port: env('SMTP_PORT'),
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        },
      },
      settings: {
        defaultFrom: 'mikuplayer123@gmail.com',
        defaultReplyTo: 'username@gmail.com',
      },
    },
  },
});
