const { customer, order } = require("../models/index");
const response = require("../helper/response");
const logger = require("../logger");

exports.getAllCustomer = async (req, res) => {
  try {
    const data = await customer.findAll({
        include: { model: order }
    });
    response.success(res, data);
  } catch (error) {
    logger.error(error);
    response.failed(res, 500, error);
  }
};

exports.getCustomerById = async (req, res) => {
  try {
    const data = await customer.findByPk(req.params.id, { include: { model: order } });
    data
      ? response.success(res, data)
      : response.failed(res, 400, "Oops customer not found");
  } catch (error) {
    logger.error(error);
    response.failed(res, 500, error);
  }
};

exports.addCustomer = async (req, res) => {
  try {
    const data = await customer.create(req.body.data.attributes);
    data
      ? response.success(res, data)
      : response.failed(res, 400, "Oops something went wrong");
  } catch (error) {
    logger.error(error);
    response.failed(res, 500, error);
  }
};

exports.updateCustomerById = async (req, res) => {
  try {
    const data = await customer.update(req.body.data.attributes, {
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

exports.deleteCustomerById = async (req, res) => {
  try {
    const data = await customer.destroy({
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
