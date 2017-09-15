'use strict'

var mongodb = require("mongodb");
var mongodb_url = process.env.SECRET;
var MongoClient = mongodb.MongoClient;
var val = 1000000;

module.exports = function(req,res){
  var parameter = req.query.url;
  
  MongoClient.connect(mongodb_url,function(err,db){
    if (err) throw err;
    
    var collect = db.collection('url');
    var query = {"longurl":parameter};
    
    collect.find(query).toArray(function (err,result){
      if(err) throw err;
      
      if(result.length == 0){
        var date = new Date();
        var hour = date.getHours();
        
        collect.find().sort({_id:-1}).limit(1).toArray(function (err,results){
          if(results.length != 0){val = results[0]._id + 128;}
          //console.log("check");
          var short_url = "https://ukapoor-url-shortner.glitch.me/" + convert_to_short_url(val);
          var data = {_id:val,"longurl":parameter,"short_url":short_url,"TimeStamp":date + hour};
          collect.insert(data);
          var object = {"original_url":parameter,"short_url":short_url};
          res.send(object);
        });

      } else {
        var id = result[0]._id;
        var short_url = result[0].short_url;
        console.log(short_url);
        var object = {"original_url":parameter,"short_url":short_url};
        res.send(object);
      }
    });
  });
};

function convert_to_short_url(id){
  var string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_-";
  var size = string.length;
  //Base 64 encoding
  var answer = "";
  while(id>0){
    var remainder = id%size;
    id = Math.floor(id/size);
    answer = string[remainder].toString() + answer;
  }
  return answer;
};

