const ErrorResponse = require('../utils/errorResponse');
const Product = require('../models/Product');

// @desc    Get all products
// @route   GET /api/products
// @access  Public
exports.getProducts = async (req, res, next) => {
  try {
    // Check if DB is connected
    if (require('mongoose').connection.readyState !== 1) {
      const fs = require('fs');
      const path = require('path');
      const mockPath = path.join(__dirname, '..', 'data', 'mockDB.json');
      let products = [];
      if (fs.existsSync(mockPath)) {
        const mockData = JSON.parse(fs.readFileSync(mockPath, 'utf8'));
        products = mockData.products || [];
      }
      
      return res.status(200).json({
        success: true,
        count: products.length,
        pagination: {},
        data: products,
        isMock: true
      });
    }

    let query;

    // Copy req.query
    const reqQuery = { ...req.query };

    // Fields to exclude
    const removeFields = ['select', 'sort', 'page', 'limit', 'search'];

    // Loop over removeFields and delete them from reqQuery
    removeFields.forEach(param => delete reqQuery[param]);

    // Create query string
    let queryStr = JSON.stringify(reqQuery);

    // Create operators ($gt, $gte, etc)
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);

    // Finding resource
    query = Product.find(JSON.parse(queryStr));

    // Search query
    if (req.query.search) {
      query = query.find({
        $or: [
          { name: { $regex: req.query.search, $options: 'i' } },
          { description: { $regex: req.query.search, $options: 'i' } }
        ]
      });
    }

    // Select Fields
    if (req.query.select) {
      const fields = req.query.select.split(',').join(' ');
      query = query.select(fields);
    }

    // Sort
    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ');
      query = query.sort(sortBy);
    } else {
      query = query.sort('-createdAt');
    }

    // Pagination
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 12;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const total = await Product.countDocuments();

    query = query.skip(startIndex).limit(limit);

    // Executing query
    const products = await query;

    // Pagination result
    const pagination = {};

    if (endIndex < total) {
      pagination.next = {
        page: page + 1,
        limit
      };
    }

    if (startIndex > 0) {
      pagination.prev = {
        page: page - 1,
        limit
      };
    }

    res.status(200).json({
      success: true,
      count: products.length,
      pagination,
      data: products
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get single product
// @route   GET /api/products/:id
// @access  Public
exports.getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return next(new ErrorResponse(`Product not found with id of ${req.params.id}`, 404));
    }

    res.status(200).json({
      success: true,
      data: product
    });
  } catch (err) {
    next(err);
  }
};

exports.createProduct = async (req, res, next) => {
  try {
    // Check if DB is connected
    if (require('mongoose').connection.readyState !== 1) {
      const fs = require('fs');
      const path = require('path');
      const mockPath = path.join(__dirname, '..', 'data', 'mockDB.json');
      
      const mockData = JSON.parse(fs.readFileSync(mockPath, 'utf8'));
      const newProduct = {
        _id: `mock-prod-${Date.now()}`,
        ...req.body,
        createdAt: new Date().toISOString()
      };
      
      mockData.products.push(newProduct);
      fs.writeFileSync(mockPath, JSON.stringify(mockData, null, 2));

      return res.status(201).json({
        success: true,
        message: 'Product added to Local Catalog (Offline Mode)',
        data: newProduct,
        isMock: true
      });
    }

    const product = await Product.create(req.body);

    res.status(201).json({
      success: true,
      message: 'Product created successfully',
      data: product
    });
  } catch (err) {
    next(err);
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    // Check if DB is connected
    if (require('mongoose').connection.readyState !== 1) {
      const fs = require('fs');
      const path = require('path');
      const mockPath = path.join(__dirname, '..', 'data', 'mockDB.json');
      const mockData = JSON.parse(fs.readFileSync(mockPath, 'utf8'));
      
      const index = mockData.products.findIndex(p => p._id === req.params.id);
      if (index === -1) {
        return next(new ErrorResponse(`Product not found with id of ${req.params.id}`, 404));
      }

      mockData.products[index] = { ...mockData.products[index], ...req.body };
      fs.writeFileSync(mockPath, JSON.stringify(mockData, null, 2));

      return res.status(200).json({
        success: true,
        message: 'Product updated in Local Catalog (Offline Mode)',
        data: mockData.products[index],
        isMock: true
      });
    }

    let product = await Product.findById(req.params.id);

    if (!product) {
      return next(new ErrorResponse(`Product not found with id of ${req.params.id}`, 404));
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      success: true,
      message: 'Product updated successfully',
      data: product
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Delete product
// @route   DELETE /api/products/:id
// @access  Private
exports.deleteProduct = async (req, res, next) => {
  try {
    // Check if DB is connected
    if (require('mongoose').connection.readyState !== 1) {
      const fs = require('fs');
      const path = require('path');
      const mockPath = path.join(__dirname, '..', 'data', 'mockDB.json');
      const mockData = JSON.parse(fs.readFileSync(mockPath, 'utf8'));
      
      const index = mockData.products.findIndex(p => p._id === req.params.id);
      if (index === -1) {
        return next(new ErrorResponse(`Product not found with id of ${req.params.id}`, 404));
      }

      mockData.products.splice(index, 1);
      fs.writeFileSync(mockPath, JSON.stringify(mockData, null, 2));

      return res.status(200).json({
        success: true,
        message: 'Product deleted from Local Catalog (Offline Mode)',
        data: {},
        isMock: true
      });
    }

    const product = await Product.findById(req.params.id);

    if (!product) {
      return next(new ErrorResponse(`Product not found with id of ${req.params.id}`, 404));
    }

    await product.deleteOne();

    res.status(200).json({
      success: true,
      message: 'Product deleted successfully',
      data: {}
    });
  } catch (err) {
    next(err);
  }
};
