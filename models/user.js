const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

let usernamelengthChecker = (username)=>{
    if(!username){
        return false;
    }else{
        if(username.length < 3 || username.length >15){
            return false;
        }
        else{
            return true;
        }
    }
};
let validUsername = (username)=>{
    if(!username){
        return false;
    }
    else{
        const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
        return regExp.test(username);
    }
};
const usernameValidators = [{
    validator: usernameLengthChecker,
    message: 'Username must be atleast 3 characters but not more than 15'
},
{
validator: validUsername,
message: 'Must be a valid username'
}];

const userSchema = new Schema({
username: {type:String, required:true, unique:true, lowercase:true, validate:usernameValidators},
password: {type:String,required:true}
  
});

userSchema.pre('save', function(next){
    if(!this.isModified('password'))
    return next();

    bcrypt.hash(this.password,null,null, (err,hash)=>{
        if(err) return next(err);
        this.password = hash;
        next();
    });
});
userSchema.methods.comparePassword = (password)=>{
    return bcrypt.compareSync(password, this.password);
};
module.exports = mongoose.model('User', userSchema);