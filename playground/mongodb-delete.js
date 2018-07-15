//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('User').find({name: 'Victor'}).count().then((count) => {
  //   console.log(`User with name: Victor has ${count} count(s)`);
  // }, (err) => {
  //   console.log('Unable to fetch users', err);
  // })

  // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    console.log(result);
  });

  //client.close();
});
