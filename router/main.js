/**
 * Created by Hippo Innovations on 12/3/2015.
 */
var express = require("express");
var app = express();

//app.use(express.static());

var connection = require("../connection");

module.exports = function(app){
    app.get('/', function(req, res){
        res.render("form.html");

    });

    app.get('/hope', function(req, res){
        res.render("feed.html");
        var name = req.param('name');
        var age = req.param('age');

        console.log("Name: " + name + " Age: " + age);

        connection.connect(name, age);

    });


}