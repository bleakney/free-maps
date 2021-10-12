const { Schema, model } = require("mongoose");
const coordinatesSchema = require("./Coordinates");
const dateFormat = require("../utils/dateFormat");

const itemSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    status: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    postedBy: {
      type: String,
      required: true,
    },
    coordinates: [coordinatesSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Item = model("Item", itemSchema);

module.exports = Item;
