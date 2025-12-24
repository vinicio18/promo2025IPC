const imagenes = document.querySelectorAll('.imge');

imagenes.forEach((img) => {
  const duracion = 3 + Math.random() * 5; // entre 3 y 8 segundos
  const delay = Math.random() * 5;        // entre 0 y 5 segundos
  const left = Math.random() * 100;       // entre 0 y 100vw

  img.style.animationDuration = duracion + 's';
  img.style.animationDelay = delay + 's';
  img.style.left = left + 'vw';
});