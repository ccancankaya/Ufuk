module.exports = (sequelize, Sequelize) => {
    const Subscription = sequelize.define("subscription", {
      subscriptionId: {
        type: Sequelize.STRING,
        primaryKey: true,
        unique: true
      },
      fullName: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      locationName: {
        type: Sequelize.STRING
      },
      subCityName: {
        type: Sequelize.STRING
      },
      cityName: {
        type: Sequelize.STRING
      },
      brand: {
        type: Sequelize.STRING
      },
      phoneNumber: {
        type: Sequelize.NUMERIC
      },
      distirbutorNumber: {
        type: Sequelize.NUMERIC
      }
    });
  
    return Subscription;
  };