const {Schema,model}= require('mongoose')
const authoirSchema= new Schema({
    name:{
        type:String,
        required:true
    },
    bio:{
        type:String
    },
    nationality:{
        type:String
    }

})
module.exports =model('Author',authoirSchema)