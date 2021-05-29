const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models");

const Order = db.orders;
const Subscription = db.subscriptions;

const app = express();

require("./app/routes/order.routes")(app);
require("./app/routes/subscription.routes")(app);


//modelleri tablo olarak veritabanında oluşturması için
db.sequelize.sync({ force: true }).then(() => {
    console.log("Tablolar oluşturuldu");
    initial();
  });

var corsOptions = {
  origin: "http://localhost:8081"
};

//front end den gelecek istekler için koruma ve izin sağlar
app.use(cors(corsOptions));


app.use(bodyParser.json());


app.use(bodyParser.urlencoded({ extended: true }));

// Başlangıç route u
app.get("/", (req, res) => {
  res.json({ message: "Api works." });
});

// Port ayarlanır ve uygulama başlatılır ayarlanan port dinlenir.
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

//uygylama başlayınca veritabanına örnek verileri atacak
function initial() {
  Subscription.create({
    subscriptionId: 'abc123',
    fullName: 'utku',
    address: 'sair nefi sokak',
    locationName: 'caferaga',
    subCityName: 'kadiköy',
    cityName: 'istanbul',
    brand: 'hayat',
    phoneNumber: 5332858530,
    distirbutorNumber: 2161000000
  });
 
  Order.create({
    subscriptionId: 'abc123',
    deliveryDate: '2017-05-02 00:13',
    paymentMethod: 'BKM',
    products: '[{"product":"19 lt damacana","quantity":1}]',
    totalAmount: req.body.locationName,
    status: req.body.subCityName
  });

  Order.create({
    subscriptionId: 'abc123',
    deliveryDate: '2017-04-23 20:05',
    paymentMethod: 'MASTERPASS',
    products: '[{"product":"19 lt damacana","quantity":1},{"product":"10 lt pet","quantity":2}]',
    totalAmount: req.body.locationName,
    status: req.body.subCityName
  });
 
}