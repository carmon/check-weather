import https from "request";

interface Time {
  observation_time: string;
  temperature: number;
  wind_speed: number;
  wind_degree: number;
  wind_dir: string;
  pressure: number;
  precip: number;
  humidity: number;
  cloudcover: number;
  feelslike: number;
  uv_index: number;
  visibility: number;
  is_day: string;
}

const city = "Buenos Aires";

const getTargetURL = (location: string) =>
  `http://api.weatherstack.com/current?access_key=${WEATHERSTACK_API_KEY}&query=${location}`;

https(getTargetURL(city), { method: "GET" }, (error, response, body) => {
  if (response && response.statusCode === 200) {
    const current: Time = JSON.parse(body).current;
    console.log(`Current temperature in ${city} is ${current.temperature}°C.`);
    console.log(`It's ${current.precip === 0 ? "not" : ""} raining.`);
  } else {
    console.log(error);
  }
});
