const express = require("express");
const tourController = require("./../controllers/tourController");

const router = express.Router();

// const checkedBook = (req, res, next) => {
//   res.send("checkedBook");
//   next();
// };

router
  .route("/")
  .get(tourController.getAllTours)
  .post(tourController.createTour);

router
  .route("/:id")
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
