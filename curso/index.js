if('serviceWorker' in navigator){
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./pwabuilder-sw.js')
    .then((reg) => {
      console.log('serviceWorker registrado // ', reg);
    }).catch((e) => {
      console.log('falha! // ', e.message)
    })
  })
}
let myPrompt;
//const pwaAlert = document.querySelector('#prompt_div');
const btnPWA = document.querySelector('#ins');

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  myPrompt = e;
});

btnPWA.addEventListener('click', () => {
  myPrompt.prompt();
  console.log('pronto para instalar ' + e);
  myPrompt.userChoice
  .then( (choiceResult) => {
    if(choiceResult === 'accepted'){
      console.log('instalacao aceita');
    }else{
      console.log('instalacao negada/falhou');
    }
  });
});