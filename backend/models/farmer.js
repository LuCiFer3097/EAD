const mongoose = require("mongoose");
const Role = require("../helpers/roles");
const User = require("./User");

var options = { discriminatorKey: "farmer" };
var FarmerSchema = User.discriminator(
  "farmer",
  new mongoose.Schema(
    {
      role: {
        type: String,
        default: Role.Farmer
      },
      completedOrders: {
        type: Number,
        required: false
      },
      totalOrders: {
        type: Number,
        required: false
      },
      totalEarnings: {
        type: Number,
        required: false
      }
    },
    options
  )
);

module.exports = Farmer = mongoose.model("farmer");
