const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

let password = '123abc!';

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
// })

let hashedPassword = '$2a$10$qKAZRMQJEWyomO6MXA/BuuoGlipBkyZRB1TH5eBNEnKqvmmQ6/U7O';

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});

// let data = {
//   id: 10
// };

// let token = jwt.sign(data, '123abc');
// console.log(token);

// let decoded = jwt.verify(token, '123abc');
// console.log('decoded', decoded);




// let message = 'I am user number 1';
// let hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`HASH: ${hash}`);

// let data = {
//   id: 4
// };
// let token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// let resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if (resultHash === token.hash) {
//   console.log('Data was not changed');
// } else {
//   console.log('Data was tampered')
// }