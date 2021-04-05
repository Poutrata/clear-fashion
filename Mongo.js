const {MongoClient} = require('mongodb');
const MONGODB_URI = "mongodb+srv://Vincent:Pilykgh666@cluster0.n471j.mongodb.net/clearfashion?retryWrites=true&w=majority";
const MONGODB_DB_NAME = "clearfashion";
const products = [];

async function run(){
    const client = await MongoClient.connect(MONGODB_URI, {'useNewUrlParser': true, useUnifiedTopology: true});
    const db = client.db(MONGODB_DB_NAME)
}
run();

const collection = db.collection('products');
const result = collection.insertMany(products);

console.log(result);