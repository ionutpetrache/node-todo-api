const { MongoClient, ObjectID } = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // findOneAndUpdate
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('59fdbb2b72316175e024a729')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').findOneAndUpdate({
    //     _id: new ObjectID("59fdbd5972316175e024a83d")
    // }, {
    //     $set: {
    //         name: 'Ion'
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // })

    db.collection('Users').findOneAndUpdate({
        name: 'Ion'
    }, {
        $inc: {
            age: 10
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })

    // db.close();
})