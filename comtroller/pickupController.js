import {Pickup} from "../models/pickupModel.js";
import {ErrorHander} from "../utils/errorhander.js";
import catchAsyncError from "../middleware/catchAsyncError.js";
import {ApiFeatures} from "../utils/apifeatures.js";
import cloudinary from "cloudinary";




// Create Pickup request
export const createPickup = catchAsyncError(async (req, res, next) => {

  const pickup = await Pickup.create(req.body);

  res.status(201).json({
    success: true,
    pickup
  })
});

// get allpickup request (Admin)
export const getAdminPickups = catchAsyncError(async (req, res, next) => {
  const pickups = await Pickup.find();

  res.status(200).json({
    success: true,
    pickups,
  });
});

// Update Pickup -- Admin

export const updatePickup = catchAsyncError(async (req, res, next) => {
  let pickup = await Pickup.findById(req.params.id);

  if (!pickup) {
    return next(new ErrorHander("Pickup not found", 404));
  }

  pickup = await Pickup.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    pickup,
  });
});


// Delete Pickup

export const deletePickup = catchAsyncError(async (req, res, next) => {
  const pickup = await Pickup.findById(req.params.id);

  if (!pickup) {
    return next(new ErrorHander("Pickup not found", 404));
  }

  await pickup.remove();

  res.status(200).json({
    success: true,
    message: "Pickup Delete Successfully",
  });
});

