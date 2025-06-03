function confirmarAsistencia() {
    alert("¡Gracias por confirmar tu asistencia! 🧽💛 Nos vemos en el cumple 🎉");
  }
  document.getElementById('playMusic').addEventListener('click', function () {
    const musica = document.getElementById('musica');
    musica.play();
    this.style.display = 'none'; // Oculta el botón después de hacer clic
  });
    