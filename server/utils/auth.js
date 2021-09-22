const jwt = require('jsonwebtoken');

const secret = 'thebestsecreteverrrr';
const expiration = '2h';

module.exports = {
   authMiddleware: function({ req }) {
      let token = req.body.token || req.query.token

      if (req.headers.authorization) {
         token = token.split('').pop().trim();
      }

      if (!token) {
         return req;
      }

      try {
         const { data } = jwt.verify(token, secret, expiration);
         req.user = data;
      } catch {
         console.log('Invalid Token');
      }
      return req;
   },
   signToken: function ({ firstName, email, _id }) {
      const payload = { firstName, email, _id};

      return jwt.sign({ data: payload }, secret)
   },
};