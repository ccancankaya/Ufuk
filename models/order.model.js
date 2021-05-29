const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define("orders", {
      orderId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
      },
      subscriptionId: {
        type: Sequelize.STRING
      },
      deliveryDate: {
        type: Sequelize.STRING
      },
      paymentMethod: {
        type: Sequelize.STRING
      },
      products: {
        type: Sequelize.STRING
      },
      totalAmount: {
        type: DataTypes.DECIMAL
      },
      status: {
        type: Sequelize.STRING
      }
    });
  
    return Order;
  };