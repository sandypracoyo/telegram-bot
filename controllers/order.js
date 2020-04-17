const { product, order, order_item } = require("../models/index");
const response = require("../helper/response");
const logger = require("../logger");

exports.getAllOrder = async (req, res) => {
  try {
    const data = await order.findAll({
      include: {
        model: product,
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

exports.getOrderById = async (req, res) => {
  try {
    const data = await order.findByPk(req.params.id, {
      include: {
        model: product,
        through: { 
            model: order_item,
            as: 'order_detail',
            attributes: ["quantity"] 
        }
      }
    });
    data
      ? response.success(res, data)
      : response.failed(res, 400, "Oops order not found");
  } catch (error) {
    logger.error(error);
    response.failed(res, 500, error);
  }
};

exports.addOrder = async (req, res) => {
  try {
    const attributes = req.body.data.attributes;
    const data = await order.create({
      user_id: attributes.user_id,
      driver_id: attributes.driver_id
    });
    const order_details = [];
    attributes.order_detail.forEach(async x => {
      x.order_id = data.id;
      const order_detail = await order_item.create(x);
      order_details.push(order_detail.dataValues);
    });
    data.order_detail = order_details;
    data
      ? response.success(res, data)
      : response.failed(res, 400, "Oops something went wrong");
  } catch (error) {
    logger.error(error);
    response.failed(res, 500, error);
  }
};

exports.updateOrderById = async (req, res) => {
  try {
    const data = await order.update(req.body.data.attributes, {
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

exports.deleteOrderById = async (req, res) => {
  try {
    const data = await order.destroy({
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
