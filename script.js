let contador = localStorage.getItem('visitas') || 0;
contador++;
localStorage.setItem('visitas', contador);
console.log(`Número de visitas: ${contador}`);
