async function getClima() {
  const response = await fetch("/clima");
  const data = await response.json();

  return data;
}

function getMonth(date) {
  return {
    hour: date.getHours(),
    day: date.getDate(),
    month: date.toLocaleString("es-co", { month: "long" }),
    year: date.getFullYear(),
  };
}

function saludo() {
  const dateObj = new Date();
  const { hour, day, month, year } = getMonth(dateObj);

  let mensajeDiaTardeNoche;

  if (hour < 13) {
    mensajeDiaTardeNoche = "Buenos días";
    styleName = "morning";
  } else if (hour < 19) {
    mensajeDiaTardeNoche = "Buenas tardes";
    styleName = "afternoon";
  } else if (hour < 24) {
    mensajeDiaTardeNoche = "Buenas noches";
    styleName = "evening";
  }

  document.querySelector(".greetings").innerText = mensajeDiaTardeNoche;
  document.querySelector(
    ".greetingWithDate"
  ).innerText = `Hoy es ${day} de ${month} de ${year}`;
  document.body.className = styleName;
}

getClima().then((data) => {
  const icon = data.weather[0].icon;
  const imagenClima = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  const tempCelcius = data.main.temp.toFixed(2);
  const climaMedellin = data.weather[0].main;
  const sensacionTermica = data.main.feels_like
  const tempMinima = data.main.temp_min
  const tempMaxima = data.main.temp_max
  const presion = data.main.pressure
  const humidity = data.main.humidity

  document.querySelector(
    ".temperatura"
  ).innerText = `Temperatura de Medellín es ${tempCelcius}`;
  document.querySelector(
    ".clima"
  ).innerText = `El clima actual de Medellín es: ${climaMedellin}`;
  document.querySelector(".imagenClima img").src = imagenClima;
  document.querySelector(".sensacion").innerText = `Las sesancion termina es: ${sensacionTermica} grados centígrados.`
  document.querySelector(".tempMin").innerText = `Mínima temperatuta es : ${tempMinima} grados centígrados.`
  document.querySelector(".tempMax").innerText = `Máxima temperatuta es : ${tempMaxima} grados centígrados.`
  document.querySelector(".tempMax").innerText = `Presión atmosférica es : ${presion} hPa.`
  document.querySelector(".humedad").innerText = `Humedad realtiva es : ${humidity} %.`
});

saludo();
