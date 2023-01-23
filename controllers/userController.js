const express = require("express");

//user handler
exports.getAllUsers = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not  yet defined",
  });
};
exports.getAllUser = (req, res) => {
  res.send("user route comming soon");
};
