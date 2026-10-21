function atualizarContador() {
    const agora = new Date();
    const meiaNoite = new Date();

    meiaNoite.setHours(24, 0, 0, 0);

    const diferenca = meiaNoite - agora;

    const horas = Math.floor(diferenca / 3600000);
    const minutos = Math.floor((diferenca % 3600000) / 60000);
    const segundos = Math.floor((diferenca % 60000) / 1000);

    const formatar = numero => String(numero).padStart(2, "0");

    const contador = document.getElementById("contador");

    if (contador) {
        contador.textContent =
            ${formatar(horas)}:${formatar(minutos)}:${formatar(segundos)};
    }
}

atualizarContador();
setInterval(atualizarContador, 1000);