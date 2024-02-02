const app = require("express")();
const conn = require("./connection.js");

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

let object = {
  coord: {
    lon: 74.3436,
    lat: 31.5497,
  },
  weather: [
    {
      id: 721,
      main: "Haze",
      description: "haze",
      icon: "50d",
    },
  ],
  base: "stations",
  main: {
    temp: 294.14,
    feels_like: 293.5,
    temp_min: 294.14,
    temp_max: 295.21,
    pressure: 1018,
    humidity: 46,
  },
  visibility: 2500,
  wind: {
    speed: 0,
    deg: 0,
  },
  clouds: {
    all: 20,
  },
  dt: 1702634603,
  sys: {
    type: 1,
    id: 7585,
    country: "PK",
    sunrise: 1702605258,
    sunset: 1702641647,
  },
  timezone: 18000,
  id: 1172451,
  name: "Lahore",
  cod: 200,
};

app.get("/", (req, res) => {
  // setTimeout(() => {
  //   res.json(object);
  // }, 5000);

  conn.connect((err) => {
    if (err) console.log('error 1'+err);
    
    let sql = "SELECT * FROM `products`";
    
    conn.query(sql, (err, data) => {
      if (err) console.log('error 2'+err);

      res.send(data);
      // console.log(data);

    });
  });

});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
