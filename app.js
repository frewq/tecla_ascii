document.body.addEventListener('keypress', 
  (tecla) => (
    document.querySelector('#tecla').innerHTML = `Tecla: <span id='colortecla'>${tecla.key}</span>`,
    document.querySelector('#codigo').innerHTML = `Código ASCII: <span id='colortecla'>${tecla.keyCode}</span>`
  )
);