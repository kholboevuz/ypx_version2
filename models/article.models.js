const mongoose = require('mongoose')
const articleSchema = new mongoose.Schema({
   articlename:{
    type: String
   },
   authors: {
    type: [String] 
   },
   keywords: {
    type: [String] 
   },
   file: {
    type: String
   },
   public: {
    type: Boolean
   },
   doi:{
    type: Boolean,
    default: false
   },
   balance: {
    type: Number,
    default: 0
   },
   userid:{
    type: String,
    required: true
   },
   status: {
    type : Number,
    default: 0
   }
}, {
    timestamps: true
})


module.exports = mongoose.model('Article', articleSchema)