module.exports = ({ env }) => ({
  url: env('MY_RAILWAY-APP_URL'),
  proxy: true,
  app: {
    keys: env.array('APP_KEYS', ['testKey1', 'testKey2']),
  },
});
