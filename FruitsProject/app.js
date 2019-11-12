const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';
const dbName = 'fruitsDB';

const client = new MongoClient(url, {useNewUrlParser: true});
client.connect((err) => {
  assert.equal(null, err);
  console.log('Successfully connected to Mongo server.');

  const db = client.db(dbName);

  // Perform actions on the collection object

  // Insert new objects
  // insertDocuments(db, () => {
  //   client.close();
  // });

  // Find objects
  findDocuments(db, () => {
    client.close();
  });
});


const insertDocuments = (db, callback) => {
  // Get the documents collection
  const collection = db.collection('fruits');

  collection.insertMany([
    {
      name: 'Apple',
      score: 8,
      review: 'Great fruit',
    },
    {
      name: 'Orange',
      score: 6,
      review: 'Kinda sour',
    },
    {
      name: 'Banana',
      score: 10,
      review: 'Epic stuff!',
    },
  ], (err, result) => {
    assert.equal(null, err);
    assert.equal(1, result.insertedCount);
    assert.equal(2, result.insertedCount);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log('Inserted 3 documents into this collection.');

    callback(result);
  });
};

const findDocuments = (db, callback) => {
  // Get the documents collection
  const collection = db.collection('fruits');

  collection.find({}).toArray((err, docs) => {
    assert.equal(err, null);
    console.log('Found the following records:');
    console.log(docs);
    callback(docs);
  });
};
