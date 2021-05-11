async function getClima() {
  const response = await fetch("/clima")
  const data = await response.json()

  return data
}

function getmonth(date) {
  const hora = date.getHours();
  const dia = date.getDate();
  const mes = date.toLocaleString("es-co", { month: "long" });
  const ano = date.getFullYear();
  return [hora, dia, mes, ano];
}


function saludo() {
  const dateObj = new Date();
  const [hour, day, month, year] = getmonth(dateObj);

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
  document.querySelector(".greetingWithDate").innerText = `Hoy es ${day} de ${month} de ${year}`;
  document.body.className = styleName;

}

getClima().then(data => {

  const icon = data.weather[0].icon
  const imagenClima = `https://openweathermap.org/img/wn/${icon}@2x.png`
  const tempCelcius = (data.main.temp).toFixed(2)
  const climaMedellin = data.weather[0].main


  document.querySelector(".temperatura").innerText = `Temperatura de Medellín es ${tempCelcius}`
  document.querySelector(".clima").innerText = `El clima actual de Medellín es: ${climaMedellin}`
  document.querySelector(".imagenClima img").src = imagenClima
})


saludo();
