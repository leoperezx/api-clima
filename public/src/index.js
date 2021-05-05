async function getClima() {
  const response = await fetch("/clima")
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

