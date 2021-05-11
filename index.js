import fetch from 'node-fetch'
import express from 'express'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'

const app = express()
dotenv.config()

async function getClima() {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Medellin&units=metric&lang=es&appid=${process.env.OPEN_WEATHER_API_KEY}`)
  const data = await response.json()
  
  return data
}

app.use(express.static(dirname(fileURLToPath(import.meta.url)) + '/public/'))

app.listen('3000', function () {
  console.log('Servidor Web escuchando en el puerto 3000')
})

app.get('/clima', function (req, res) {
  getClima().then(data => {
    res.send(data);
  })
});