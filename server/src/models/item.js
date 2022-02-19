const mongoose = require('mongoose');

const Item = new mongoose.Schema({
   title: {
      type: String,
   },
   content: {
      type: String,
      required: true
   },
   tags: {
      type: Array,
      default: [],
   },
   meta: {
      type: Object,
      default: {},
   },
   author: {
      type: String,
      required: true,
   },
   files: {
      type: Array,
      default: [],
   }
});

module.exports = mongoose.model('Item', Item);