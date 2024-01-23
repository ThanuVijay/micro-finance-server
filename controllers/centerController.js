const {CenterModel} = require('../models/centerModel'); // Replace './models' with the path to your models file

// Create a new center
const createCenter = async (req, res, next) => {
    try {
      const centerData = req.body;
      const newCenter = await CenterModel.create(centerData);
      res.status(201).json({ message: 'Center created successfully', center: newCenter });
    } catch (error) {
      res.status(400).json({ message: 'Failed to create center', error: error.message });
    }
  };


// Get all centers
const getAllCenters = async (req, res, next) => {
    try {
      const centers = await CenterModel.find();
      res.status(200).json({ centers });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', error: error.message });
    }
  };


// Get a specific center by ID
const getCenterById = async (req, res, next) => {
    const centerId = req.params.id;
    try {
      const center = await CenterModel.findById(centerId);
      if (!center) {
        return res.status(404).json({ message: 'Center not found' });
      }
      res.status(200).json({ center });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', error: error.message });
    }
  };


  
// Update a center by ID
const updateCenterById = async (req, res, next) => {
    const centerId = req.params.id;
    const updatedData = req.body;
    try {
      const updatedCenter = await CenterModel.findByIdAndUpdate(centerId, updatedData, { new: true });
      if (!updatedCenter) {
        return res.status(404).json({ message: 'Center not found' });
    
      }
      res.status(200).json({ message: 'Center updated successfully', center: updatedCenter });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', error: error.message });
    }
  };




  module.exports = {createCenter , getAllCenters , getCenterById , updateCenterById}