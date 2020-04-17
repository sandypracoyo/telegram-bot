const response = require("../helper/response");
const { promises } = require("fs");
const logger = require("../logger");

exports.getLogs = async (req, res) => {
  try {
    const result = await promises.readFile("./logs/app.log", { encoding: "utf8" });
    const data = result.split("\n").filter(x => x.trim());
    response.success(res, data);
  } catch (error) {
    logger.error(error);
    response.failed(res, 500, error);
  }
};