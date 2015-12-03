/**
 * Created by Hippo Innovations on 12/1/2015.
 */
 var connect= function(username, userage) {

    var mongodb = require('mongodb');
    var MongoClient = mongodb.MongoClient;

    var url = 'mongodb://localhost:27017/mydata';

    MongoClient.connect(url, function (err, db) {
        if (err) {

            console.log('Unable to connect to the mongoDB server. Error:', err);
        }

        else {
            console.log('Connection established to', url);

            // Get the documents collection
            var collection = db.collection('newCollection');

            //Create some users
            var data = {name: username, age: userage };


            /* var user2 = {name: 'modulus user', age: 22, roles: ['user']};
             var user3 = {name: 'modulus super admin', age: 92, roles: ['super-admin', 'admin', 'moderator', 'user']};*/

            // Insert some users
            collection.insert(data, function (err, result) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('Inserted %d documents into the "newCollection" collection. The documents inserted with "_id" are:', result.length, result);
                }
//Close connection
                db.close();
            });

        }
    });
}

module.exports.connect = connect;
