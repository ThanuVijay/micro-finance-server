const {BranchModel} = require('../models/centerModel')

const createBranch = async (req, res, next) => {
    try {
      const branchData = req.body;
      const newBranch = await BranchModel.create(branchData);
      res.status(201).json({ message: 'Branch created successfully', branch: newBranch });
    } catch (error) {
      res.status(400).json({ message: 'Failed to create branch', error: error.message });
    }
  };


  // Get all branches
const getAllBranches = async (req, res, next) => {
    try {
      const branches = await BranchModel.find();
      res.status(200).json({ branches });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', error: error.message });
    }
  };

  // Get a specific branch by ID
const getBranchById = async (req, res, next) => {
    const branchId = req.params.id;
    try {
      const branch = await BranchModel.findById(branchId);
      if (!branch) {
        return res.status(404).json({ message: 'Branch not found' });
      }
      res.status(200).json({ branch });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', error: error.message });
    }
  };
  
  // Update a branch by ID
  const updateBranchById = async (req, res, next) => {
    const branchId = req.params.id;
    const updatedData = req.body;
    try {
      const updatedBranch = await BranchModel.findByIdAndUpdate(branchId, updatedData, { new: true });
      if (!updatedBranch) {
        return res.status(404).json({ message: 'Branch not found' });
      }
      res.status(200).json({ message: 'Branch updated successfully', branch: updatedBranch });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', error: error.message });
    }
  };
  
  // Delete a branch by ID
  const deleteBranchById = async (req, res, next) => {
    const branchId = req.params.id;
    try {
      const deletedBranch = await BranchModel.findByIdAndDelete(branchId);
      if (!deletedBranch) {
        return res.status(404).json({ message: 'Branch not found' });
      }
      res.status(200).json({ message: 'Branch deleted successfully', branch: deletedBranch });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', error: error.message });
    }
  };



  module.exports = {createBranch , getAllBranches ,  getBranchById , updateBranchById , deleteBranchById }