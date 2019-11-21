const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'lightbnb'
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params)
    .then(res => {
      console.log('res.rows:', res.rows);
      if (res.rows.length) {
        return res.rows;
      } else {
        return null;
      };
    })
    .catch(err => console.err('query error', err.stack));
  },
};
