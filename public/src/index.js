
async function getClima() {
  const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Medellín&appid=77fcf95a5a97ef3c12ad9e0a4dafb08d")
  const data = await response.json()

  return data
}

getClima().then(data => {
  console.log(data)
  const icon = data.weather[0].icon
  const imagenClima = `https://openweathermap.org/img/wn/${icon}@2x.png`
  const tempCelcius = (data.main.temp-273.15).toFixed(2)
  const climaMedellin = data.weather[0].main

  document.querySelector(".temperatura").innerHTML = `Temperatura de Medellín es ${tempCelcius}`
  document.querySelector(".clima").innerHTML = `El clima actual de Medellín es: ${climaMedellin}`
  document.querySelector(".imagenClima img").src = imagenClima
})

