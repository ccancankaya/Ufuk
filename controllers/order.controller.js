const db = require("../models");
const Order = db.orders;
const Op = db.Sequelize.Op;

// Yeni bir sipariş oluştur
exports.create = (req, res) => {

      // Bir sipariş oluştur
      const order = {
        subscriptionId: req.body.subscriptionId,
        deliveryDate:req.body.deliveryDate,
        paymentMethod: req.body.fullName,
        products: req.body.address,
        totalAmount: req.body.locationName,
        status: req.body.subCityName
      };
    
      // Veritabanına kaydet
      Order.create(order)
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

// Üyelik numarısna göre verilmiş siparişleri bul
exports.findAll = (req, res) => {
    const subscriptionId = req.params.subscriptionId;
  
    Order.findAll({ where: {
        subscriptionId:subscriptionId
    } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
};

// sipariş ıd sine göre sipariş bul
exports.findOne = (req, res) => {
    const orderId = req.params.id;

    Tutorial.findByPk(orderId)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + orderId
        });
      });
};