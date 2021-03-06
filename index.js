import fetch from 'node-fetch'
import express from 'express'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'
import nunjucks from 'nunjucks'


const app = express()
const root = dirname(fileURLToPath(import.meta.url))

dotenv.config()

nunjucks.configure('views', {
  autoescape: true,
  express: app
});

async function getClima() {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Medellin&units=metric&lang=es&appid=${process.env.OPEN_WEATHER_API_KEY}`)
  const data = await response.json()
  
  return data
}

function prepareApiData(data) {
  const icono = data.weather[0].icon;
  return {
    weather: {
      icon: `https://openweathermap.org/img/wn/${icono}@2x.png`,
      description: data.weather[0].description,
    },
    temp: {
      temperature: data.main.temp.toFixed(2),
      feels: data.main.feels_like,
      min: data.main.temp_min,
      max: data.main.temp_max,
    },
    humidity: data.main.humidity,
    pressure: data.main.pressure,
  };
}

app.use(express.static(`${root}/public/`))

app.listen('3000', () => {
  console.log('Servidor Web escuchando en el puerto 3000')
})

app.get('/', (req, res) => {
  res.render('index.html');
});

app.get('/clima', (req, res) => {
  getClima().then(data => {
    res.send(prepareApiData(data));
  })
});

