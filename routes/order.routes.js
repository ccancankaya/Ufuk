module.exports = app => {
    const order_controller = require("../controllers/order.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/addOrder", order_controller.create);
  
    // Retrieve all Tutorials
    router.get("/getSubscriptionOrders/:subscriptionId", order_controller.findAll);
  
  
    // Retrieve a single Tutorial with id
    router.get("/:id", order_controller.findOne);
  
    app.use('/api/orders', router);
  };