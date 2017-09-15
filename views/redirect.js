'use strict'
var mongodb = require("mongodb");
var mongodb_url = process.env.SECRET;
var MongoClient = mongodb.MongoClient;


module.exports = function(req,res){
  var string = req.params.short;
  var url_id = decode_function(string);
  MongoClient.connect(mongodb_url, function(err,db){
    if(err) throw err;
    var collect = db.collection('url');
    var query = {_id:url_id};
    collect.find(query).toArray(function (err,results){
      if(err) throw err;
      if(results.length == 0){
        res.send("Error. No URL Found \n");
      } else {
        var url = results[0].longurl;
        res.redirect(url);
      }
    });
  });

};

function decode_function(str){
  var base_string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_-";
  var number = base_string.length;
  var answer = 0;
  
  while(str){
    var index = base_string.indexOf(str[0]);
    var power = str.length - 1;
    answer += index * (Math.pow(number, power));
    str = str.substring(1);
  }
  
  return answer;
}