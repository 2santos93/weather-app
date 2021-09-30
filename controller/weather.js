const { getWeatherTemp } = require("../services/weather");
const {isHigherThanLimit} = require('../helpers/weather');

const weather = async (req, res) => {
  const {city} = req.query;

  try{
    const weatherTemp = await getWeatherTemp(city);
    res.send({isHigher: isHigherThanLimit(weatherTemp)});

  }catch(e){
    const errorMsg = e.response?.data.message || e.message;
    //logger
    console.log(`[GET-WEATHER] ERROR: ${errorMsg}`);
    res.status(400).send({errorMsg});
  }
}

module.exports = {
  weather
}