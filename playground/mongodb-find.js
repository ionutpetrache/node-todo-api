const { MongoClient, ObjectID } = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('59fd951b2cf6de1195527aed')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch dotos', err);
    // });

    // db.collection('Todos').find({}).count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch dotos', err);
    // });

    db.collection('Users').find({ name: 'Patraulea' }).count().then((count) => {
        console.log(`How many Patraulea? => ${count}`);
    }, (err) => {
        console.log('Unable to fetch users', err);
    })

    // db.close();
})