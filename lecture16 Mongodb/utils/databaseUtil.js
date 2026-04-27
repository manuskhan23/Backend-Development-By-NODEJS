const mongo = require('mongodb');

const MongoClient = mongo.MongoClient;

const MONGO_URL = "mongodb://muhammadanuskhan23_db_user:hygKABUkRfnXbsXJ@ac-a5d3ylf-shard-00-00.xfzqsqj.mongodb.net:27017,ac-a5d3ylf-shard-00-01.xfzqsqj.mongodb.net:27017,ac-a5d3ylf-shard-00-02.xfzqsqj.mongodb.net:27017/?ssl=true&replicaSet=atlas-aqdyqz-shard-0&authSource=admin&appName=Cluster0";

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(MONGO_URL)
  .then(client => {
    callback();
    _db = client.db('airbnb');
    console.log("Mongodb connected");
  }).catch(err => {
    console.log('Error while connecting to Mongo: ', err);
  });
}

const getDB = () => {
  if (!_db) {
    throw new Error('Mongo not connected');
  }
  return _db;
}

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;