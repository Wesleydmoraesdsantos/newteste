if('serviceWorker' in navigator){
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/pwabuilder-sw.js', { scope: '/tst/2/' })
    .then((reg) => {
      console.log('serviceWorker registrado // ', reg);
    }).catch((e) => {
      console.log('falha! // ', e.message)
    })
  })
}
let myPrompt;
const pwaAlert = document.querySelector('#prompt_div');
const btnPWA = document.querySelector('#install_pwa_button');

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
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
  });
});