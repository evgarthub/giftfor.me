module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2709135180e017027fc1fb347d31f4e8'),
  },
});
