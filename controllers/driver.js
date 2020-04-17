const { driver, order } = require("../models/index");
const response = require("../helper/response");
const logger = require("../logger");

exports.getAllDriver = async (req, res) => {
  try {
    const data = await driver.findAll({
        include: { model: order }
    });
    response.success(res, data);
  } catch (error) {
    logger.error(error);
    response.failed(res, 500, error);
  }
};

exports.getDriverById = async (req, res) => {
  try {
    const data = await driver.findByPk(req.params.id, { include: { model: order } });
    data
      ? response.success(res, data)
      : response.failed(res, 400, "Oops driver not found");
  } catch (error) {
    logger.error(error);
    response.failed(res, 500, error);
  }
};

exports.addDriver = async (req, res) => {
  try {
    const data = await driver.create(req.body.data.attributes);
    data
      ? response.success(res, data)
      : response.failed(res, 400, "Oops something went wrong");
  } catch (error) {
    logger.error(error);
    response.failed(res, 500, error);
  }
};

exports.updateDriverById = async (req, res) => {
  try {
    const data = await driver.update(req.body.data.attributes, {
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

exports.deleteDriverById = async (req, res) => {
  try {
    const data = await driver.destroy({
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
