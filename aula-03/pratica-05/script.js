const dataAtual = new Date();

const diasDoMes = document.getElementById("dia-do-mes");
diasDoMes.textContent = dataAtual.getDate();

const mesAtual = document.getElementById("mes-atual");
mesAtual.textContent = dataAtual.getMonth();

const anoAtual = document.getElementById("ano-atual");
anoAtual.textContent = dataAtual.getFullYear();

const diaDaSemana = document.getElementById("dia-da-semana");
diaDaSemana.textContent = dataAtual.getDay();