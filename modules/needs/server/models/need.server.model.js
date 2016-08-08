'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Article Schema
 */
var NeedSchema = new Schema({
  title: {
    type: String,
    default: '',
    trim: true,
    required: 'Title cannot be blank'
  },
  description: {
    type: String,
    default: '',
    trim: true,
    required: 'Please provide a description'
  },
  organization: {
    type: String,
    default: '',
    trim: true
  },
  location: {
    type: String,
    default: '',
    trim: true
  },
  startDate: {
    type: Date
  },
  endDate: {
    type: Date
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdOn: {
    type: Date,
    default: Date.now
  },
  createdBy: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  numberNeeded: {
    type: Number,
    default: 1
  },
  volunteers: [
    {user: Schema.ObjectId}
  ]
});

mongoose.model('Need', NeedSchema);
