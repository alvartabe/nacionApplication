var Tweet=require('../models/tweet');
var express=require('express');

var router=express.Router();

router.route('/principito')
    
    .get(function(req,res){
       Tweet.find(function(err,principito){
           if(err)
                res.send(err);
           res.json(principito);
       });
    })

    .post(function(req,res){
    	
        var tweet=new Tweet();
        tweet.username = req.body.username;
        tweet.tweetID = req.body.tweetID;
        tweet.email = req.body.email;
        tweet.apellido = req.body.apellido;
        tweet.save(function(err){

        if(err)
            {
                console.log(err);
                res.status(500).json({status:'Fallo'});
            }
            else
            {
                res.json({status: 'Completado'});
            }
        });
    });

router.route('/principito/:id')
    .put(function(req,res){
        Tweet.findOne({_id:req.params.id},function(err,objTweet){

            if(err)
                res.send(err);

           for(prop in req.body){
               
                objTweet[prop]=req.body[prop];
           }

            objTweet.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'objTweet updated!' });
            });
        });
    })

    .get(function(req,res){
        Tweet.findOne({_id:req.params.id},function(err, objTweet) {
            if(err)
                res.send(err);

            res.json(objTweet);
        });
    })

    .delete(function(req,res){
        Tweet.remove({
            _id: req.params.id
        }, function(err, objTweet) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });

module.exports=router;