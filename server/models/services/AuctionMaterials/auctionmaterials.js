const mongoose = require('mongoose');

// Define the schema for the director details
const directorSchema = new mongoose.Schema({
  directorName: String,
  directorAadhar: String,
  directorPan: String,
  directorDob: String,
  directorFatherName: String,
});

// Define the schema for the form data
const auctionmaterialsModelSchema = new mongoose.Schema({
  userId: String,
  tenderNumber: String,
  tenderLink: String,
  companyName: String,
  cinReg: String,
  gst: String,
  pan: String,
  workExperience: [
    {
      workExperience: [String],
      workOrderSamples: [String],
      workProfiles: [String],
    },
  ],
  directors: [directorSchema],
  address: String,
  country: String,
  state: String,
  city: String,
  zipCode: String,
  website: String,
  projectMailId: String,
  contactPersonName: String,
  contactPersonNumber: String,
  auctionMaterial: [String],
  otherDescription: String,
},
  { timestamps: true });

// Create the FormData model
const AuctionMaterialForm = mongoose.model('Auction-Material', auctionmaterialsModelSchema);

module.exports = AuctionMaterialForm;
