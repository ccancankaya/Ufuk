module.exports = app => {
    const subscription_controller = require("../controllers/subscription.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/addSubscription", subscription_controller.create);
  
    // Retrieve all Tutorials
    router.get("/getSubscriptions", subscription_controller.findAll);
  
  
    // Retrieve a single Tutorial with id
    router.get("/:id", subscription_controller.findOne);
  
    app.use('/api/subscriptions', router);
  };