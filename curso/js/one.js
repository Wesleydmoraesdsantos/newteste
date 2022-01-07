if('serviceWorker' in navigator){
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
    .then((reg) => {
      console.log('serviceWorker registrado // ', reg);
    }).catch((e) => {
      console.log('falha! // ', e.message)
    })
  })
}