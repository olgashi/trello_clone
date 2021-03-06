const mongoose = require('mongoose');
const Comment = require('./comment');
const Schema = mongoose.Schema;

const CardSchema = new Schema({
  title: {
    type: String,
    required: [true, 'The Card title is required']
  },
  dueDate: {
    type: String,
  },
  labels:
    [
      { type: String }
    ]
  ,
  description: {
    type: String,
  } ,
  listId: {
    type: Schema.Types.ObjectId
  },
  boardId: {
    type: Schema.Types.ObjectId
  },
  position: {
    type: Number,
  },
  commentsCount: {
    type: Number,
  },
  comments: [
    {type: Schema.Types.ObjectId, ref: Comment}
  ]
})


const Card = mongoose.model('Card', CardSchema);

module.exports = Card;