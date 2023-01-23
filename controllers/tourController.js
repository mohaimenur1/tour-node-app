const tourModel = require("../models/tourModels");
// get all tours handler
exports.getAllTours = async (req, res) => {
  try {
    const tours = await tourModel.find({});
    res.status(200).json({ tours });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Data can not load properly",
    });
  }
  // console.log(req.requestTime);
  // res.status(200).json({
  //   status: "success",
  //   requesttime: req.requestTime,
  //   results: tours.length,
  //   data: {
  //     tours,
  //   },
  // });
};

//single tour handler
exports.getTour = async (req, res) => {
  try {
    const { id: tourId } = req.params;

    const singleTour = await tourModel.findById({ _id: tourId });
    res.status(201).json({
      status: "success",
      data: {
        tour: singleTour,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "please provide proper link",
    });
  }
};

// exports.getSingleTour = (req,res) => {
//   const tours =
// }

//create Tour handler
exports.createTour = async (req, res) => {
  try {
    const newTour = await tourModel.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        newTour,
      },
    });
    // console.log({ newTour });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "unable to create tour",
    });
  }
};

//update tour handler
exports.updateTour = (req, res) => {
  //get the id
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);
  res.status(200).json({
    data: {
      tour: "<updated done>",
    },
  });
};

exports.deleteTour = async (req, res) => {
  try {
    const { id: tourId } = req.params;

    const deleteTour = await tourModel.findByIdAndDelete(tourId);
    res.status(200).json({
      status: "success",
      data: {
        deleteTour,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "id not match",
    });
  }
};
