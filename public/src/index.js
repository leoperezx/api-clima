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
  const { weather, temp, pressure, humidity } = data;

  document.querySelector(
    ".temperatura"
  ).innerText = `Temperatura de Medellín es ${temp.temperature} grados Centígrados`;
  document.querySelector(
    ".clima"
  ).innerText = `El clima actual de Medellín es: ${weather.description}.`;
  document.querySelector(".imagenClima img").src = weather.icon;
  document.querySelector(
    ".sensacion"
  ).innerText = `Las sesancion termina es: ${temp.feels} grados centígrados.`;
  document.querySelector(
    ".tempMin"
  ).innerText = `Mínima temperatuta es : ${temp.min} grados centígrados.`;
  document.querySelector(
    ".tempMax"
  ).innerText = `Máxima temperatuta es : ${temp.max} grados centígrados.`;
  document.querySelector(
    ".tempMax"
  ).innerText = `Presión atmosférica es : ${pressure} hPa.`;
  document.querySelector(
    ".humedad"
  ).innerText = `Humedad realtiva es : ${humidity} %.`;
});

saludo();
