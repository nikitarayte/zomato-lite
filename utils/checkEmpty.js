const validator = require("validator")
//                    👇object
exports.checkEmpty = (config) => {
    let isError = false
    const error = []
    for (const key in config) {
        if (validator.isEmpty(config[key] ? toString(config[key]) : "")) {
            isError = true
            error.push(`${key} is required`)
        }
    }
    return { isError, error }
}