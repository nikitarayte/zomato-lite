const asyncHandler = require("express-async-handler")
const { checkEmpty } = require("../utils/checkEmpty")

exports.getLocation = asyncHandler(async (req, res) => {
    const { latitude, longitude } = req.body
    const { isError, error } = checkEmpty({ latitude, longitude })
    if (isError) {
        return res.status(400).json({ message: "all fields required", error })
    }
    const { data } = await axios.get
        (`https://api.opencagedata.com/geocode/v1/
    // json?q=${latitude}%2C${longitude}&key=${process.env.CAGE_API_KEY}`)

    console.log(data)

    let str = ""
    let city = data.results[0].components.city
    str += " " + data.results[0].components.road
    str += " " + data.results[0].components.neightbourhood
    str += " " + data.results[0].components.suburb
    str += " " + data.results[0].components.city
    str += " " + data.results[0].components.postcode

    res.json({
        message: "location fetch success", result:
        {
            address: str,
            city
        }
    })

    // setLoc(data.results[0].formatted)
})
exports.updateCustomerInfo = asyncHandler(async (req, res) => {
    const { address, city, gender } = req.body
    const { isError, error } = checkEmpty({ address, city, gender })
    if (isError) {
        return res.status(400).json({ message: "all fields required", error })
    }

    const result = await Customer.findByIdAndUpdate(req.user, {
        address,
        city,
        gender,
        infoComplete: true
    }, { new: true })

    res.json({ message: "profile update success", result })
})