document.body.addEventListener('keypress', (tecla) => presionoTecla(tecla));
document.body.addEventListener('keydown', (tecla) => presionoTecla(tecla));
    
function presionoTecla(tecla){
  document.querySelector('#colortecla').textContent = `${tecla.key}`,
  document.querySelector('#colorcodigo').textContent = `${tecla.keyCode}`
}