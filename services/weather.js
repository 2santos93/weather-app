const axios = require("axios");

const getWeatherTemp = async (city) => {
  if (!city) throw new Error("city is required");
  
  const instance = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5",
    params: {
      appid: process.env.OPEN_WEATHER_API_KEY,
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
