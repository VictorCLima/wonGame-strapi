module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '63b8a5d75653230b4fd8c6ccf0bdb4ec'),
    },
  },
});
