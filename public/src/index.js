const GREETS = {
  morning: {
    message: 'Buenos días',
    className: 'morning'
  },
  afternoon: {
    message: 'Buenas tardes',
    className: 'afternoon'
  },
  evening: {
    message: 'Buenas noches',
    className: 'evening'
  }
}

async function getClima() {
  const response = await fetch('/clima');
  const data = await response.json();

  return data;
}

function getDate(date) {
  return {
    hour: date.getHours(),
    day: date.getDate(),
    month: date.toLocaleString('es-co', { month: 'long' }),
    year: date.getFullYear(),
  };
}

function getGreet(hour) {
  let greet

  if (hour < 13) {
    greet = 'morning'
  } else if (hour < 19) {
    greet = 'afternoon'
  } else if (hour < 24) {
    greet = 'evening'
  }

  return GREETS[greet]
}

function saludo() {
  const { hour, day, month, year } = getDate(new Date());
  const { message, className } = getGreet(hour)

  document.querySelector('.greetings').innerText = message;
  document.querySelector('.greetingWithDate').innerText = `Hoy es ${day} de ${month} de ${year}`;
  document.body.className = className;
}


getClima().then((data) => {
  const { weather, temp, pressure, humidity } = data;

  document.querySelector(
    '.temperatura'
  ).innerText = `Temperatura de Medellín es ${temp.temperature} grados Centígrados`;
  document.querySelector(
    '.clima'
  ).innerText = `El clima actual de Medellín es: ${weather.description}.`;
  document.querySelector('.imagenClima img').src = weather.icon;
  document.querySelector(
    '.sensacion'
  ).innerText = `Las sesancion termina es: ${temp.feels} grados centígrados.`;
  document.querySelector(
    '.tempMin'
  ).innerText = `Mínima temperatuta es : ${temp.min} grados centígrados.`;
  document.querySelector(
    '.tempMax'
  ).innerText = `Máxima temperatuta es : ${temp.max} grados centígrados.`;
  document.querySelector(
    '.tempMax'
  ).innerText = `Presión atmosférica es : ${pressure} hPa.`;
  document.querySelector(
    '.humedad'
  ).innerText = `Humedad realtiva es : ${humidity} %.`;
});

saludo();
