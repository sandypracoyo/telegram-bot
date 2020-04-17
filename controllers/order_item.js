const { order_item } = require("../models/index");
const response = require("../helper/response");
const logger = require("../logger");

exports.getAllOrderItem = async (req, res) => {
  try {
    const data = await order_item.findAll();
    response.success(res, data);
  } catch (error) {
    logger.error(error);
    response.failed(res, 500, error);
  }
};

exports.getOrderItemById = async (req, res) => {
  try {
    const data = await order_item.findByPk(req.params.id);
    data
      ? response.success(res, data)
      : response.failed(res, 400, "Oops order not found");
  } catch (error) {
    logger.error(error);
    response.failed(res, 500, error);
  }
};
