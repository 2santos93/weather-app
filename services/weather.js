const axios = require("axios");

const getWeatherTemp = async (city) => {
  if (!city) throw new Error("city is required");
  
  const instance = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5",
    params: {
      appid: process.env.OPEN_WEATHER_API_KEY,
      // appid: '7505668477b9b20ec1726d4c75968198',
      units: "metric",
    },
  });

  const { data } = await instance.get(`/weather?q=${encodeURIComponent(city)}`);

  const {
    main: { temp },
  } = data;

  return temp;
};

module.exports = {
  getWeatherTemp,
};
