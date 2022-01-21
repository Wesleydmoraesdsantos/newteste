if('serviceWorker' in navigator){
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
    .then((reg) => {
      console.log('serviceWorker registrado // ', reg);
    }).catch((e) => {
      console.log('falha! // ', e.message)
    })
  })
}
var myPrompt;
const pwaAlert = document.querySelector('#prompt_div');
const btnPWA = document.querySelector('#ins');

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  console.log(e.platforms);
  myPrompt = e;
  pwaAlert.style.display="block";
});

btnPWA.addEventListener('click', () => {
  pwaAlert.style.display="none";
  myPrompt.prompt();
  console.log('pronto para instalar ' + e);
  myPrompt.userChoice
  .then( (choiceResult) => {
    if(choiceResult === 'accepted'){
      console.log('instalacao aceita');
    }else{
      console.log('instalacao negada/falhou');
    }
  })
});