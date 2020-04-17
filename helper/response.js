exports.success = (res, data) => {
    res.json({
        status: true,
        message: "Successfull",
        data
    })
}

exports.failed = (res, code, message) => {
    res.status(code).json({
        status: false,
        message
    })
}