const dateObj = new Date();

function getmonth(date) {
  const hora = date.getHours();
  const dia = date.getDate();
  const mes = date.toLocaleString("es-co", { month: "long" });
  const ano = date.getFullYear();
  return [hora, dia, mes, ano];
}

function saludo() {
  const [hour, day, month, year] = getmonth(dateObj);

  let mensajeDiaTardeNoche;

  if (hour < 13) {
    mensajeDiaTardeNoche = "Buenos días";
    styleName = "mañana";
  } else if (hour < 19) {
    mensajeDiaTardeNoche = "Buenas tardes";
    styleName = "tarde";
  } else if (hour < 24) {
    mensajeDiaTardeNoche = "Buenas noches";
    styleName = "noche";
  }

  document.querySelector(".greetings").innerText = mensajeDiaTardeNoche;
  document.querySelector(
    ".greetingWithDate"
  ).innerText = `Hoy es ${day} de ${month} de ${year}`;
  document.body.className = styleName;
}

saludo();
