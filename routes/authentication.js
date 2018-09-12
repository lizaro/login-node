const User = require('../models/user');

module.exports = (router)=>{
    router.post('/register',(req,res)=>{
        
        if(!req.body.username){
            res.json({success:false, message:'You must provide a username'});
        }
        else{
          if(!req.body.password){
            res.json({success:false, message:'You must provide a password'});  
        }
        else{
        let user = new User({
       username:req.body.username.toLowerCase(),
       password:req.body.password
        });
        user.save((err)=>{
            if (err){
                if(err.code === 11000){
                    res.json({success:false, message:'username or email already exist'});
                }
                else{
                     res.json({success:false, message:'could not save user. Error: ', err});
                }
               
            }
            else{
                res.json({success:true, message:'user is saved'});
            }
        });
        
        
       
    }}
    });
    return router;
}