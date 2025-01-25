const { getLocation, updateCustomerInfo, getResturants, getResturantMenu, placeOrder, getOrders, getOrderHistory } = require("../controllers/customer.controller")

const router = require("express").Router()

router
    .post("/get-location", getLocation)
    .post("/update-info", updateCustomerInfo)
    .get("/get-resturant", getResturants)
    .get("/get-resturant-menu/:rid", getResturantMenu)
    .post("/place-order", placeOrder)
    .get("/get-orders", getOrders)
    .get("/get-order-history", getOrderHistory)

module.exports = router