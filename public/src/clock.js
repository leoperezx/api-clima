function getmonth() {
  const date = new Date();

  const hora = date.getHours();
  const dia = date.getDate();
  const mes = date.toLocaleString("es-co", { month: "long" });
  const ano = date.getFullYear();
  return { hora, dia, mes, ano };
}

function saludo() {
  const info = getmonth();

  let mensajeDiaTardeNoche;

  if (info.hora < 13) {
    mensajeDiaTardeNoche = "Buenos días";
    styleName = "mañana";
  } else if (info.hora < 19) {
    mensajeDiaTardeNoche = "Buenas tardes";
    styleName = "tarde";
  } else if (info.hora < 24) {
    mensajeDiaTardeNoche = "Buenas noches";
    styleName = "noche";
  }

  document.querySelector(".greetings").innerText = mensajeDiaTardeNoche;
  document.querySelector(
    ".greetingWithDate"
  ).innerText = `Hoy es ${info.dia} de ${info.mes} de ${info.ano}`;
  document.body.className = styleName;
}

saludo();
