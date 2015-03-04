var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var tweetSchema=new Schema({
    username:String,
    tweetID:String,
    email:String,
    apellido:String
});

module.exports=mongoose.model('Tweet',tweetSchema);