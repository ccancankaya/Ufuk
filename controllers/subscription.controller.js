const db = require("../models");
const Subscription = db.subscriptions;
const Op = db.Sequelize.Op;

// Yeni bir üye oluştur ve kaydet
exports.create = (req, res) => {

      // Bir üye tanımla
      const subscription = {
        subscriptionId: req.body.subscriptionId,
        fullName: req.body.fullName,
        address: req.body.address,
        locationName: req.body.locationName,
        subCityName: req.body.subCityName,
        cityName: req.body.cityName,
        brand: req.body.brand,
        phoneNumber: req.body.phoneNumber,
        distirbutorNumber: req.body.distirbutorNumber,
      };
    
      // Veritabanına kaydet
      Subscription.create(subscription)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Bir hata oluştu"
          });
        });
};

// Tüm üyelerin listesini getir
exports.findAll = (req, res) => {
  Subscription.findAll()
  .then(data=>{
      res.send(data)
  })
  .catch(err=>{
      res.status(500).send({
          message:err.message || 'Bir hata oluştu'
      })
  })
};

// Id si vrilen üyeyi bul
exports.findOne = (req, res) => {
    const subscriptionId = req.params.id;

    Tutorial.findByPk(subscriptionId)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + subscriptionId
        });
      });
};

