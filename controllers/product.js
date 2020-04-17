const { product, order, order_item } = require("../models/index");
const response = require("../helper/response");
const logger = require("../logger");

exports.getAllProduct = async (req, res) => {
  try {
    const data = await product.findAll({
      include: {
        model: order,
        through: { 
            model: order_item,
            as: 'order_detail',
            attributes: ["quantity"] 
        }
      }
    });
    response.success(res, data);
  } catch (error) {
    logger.error(error);
    response.failed(res, 500, error);
  }
};

exports.getProductById = async (req, res) => {
  try {
    const data = await product.findByPk(req.params.id, {
      include: {
        model: order,
        through: { 
            model: order_item,
            as: 'order_detail',
            attributes: ["quantity"] 
        }
      }
    });
    data
      ? response.success(res, data)
      : response.failed(res, 400, "Oops product not found");
  } catch (error) {
    logger.error(error);
    response.failed(res, 500, error);
  }
};

exports.addProduct = async (req, res) => {
  try {
    const data = await product.create(req.body.data.attributes);
    data
      ? response.success(res, data)
      : response.failed(res, 400, "Oops something went wrong");
  } catch (error) {
    logger.error(error);
    response.failed(res, 500, error);
  }
};

exports.updateProductById = async (req, res) => {
  try {
    const data = await product.update(req.body.data.attributes, {
      where: { id: req.params.id }
    });
    data
      ? response.success(res)
      : response.failed(res, 400, "Oops something went wrong");
  } catch (error) {
    logger.error(error);
    response.failed(res, 500, error);
  }
};

exports.deleteProductById = async (req, res) => {
  try {
    const data = await product.destroy({
      where: { id: req.params.id }
    });
    data
      ? response.success(res)
      : response.failed(res, 400, "Oops something went wrong");
  } catch (error) {
    logger.error(error);
    response.failed(res, 500, error);
  }
};