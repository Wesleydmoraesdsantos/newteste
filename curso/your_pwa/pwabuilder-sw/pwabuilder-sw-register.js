// This is the service worker with the Cache-first network

// Add this below content to your HTML page inside a <script type="module"></script> tag, or add the js file to your page at the very top to register service worker
// If you get an error about not being able to import, double check that you have type="module" on your <script /> tag

/*
 This code uses the pwa-update web component https://github.com/pwa-builder/pwa-update to register your service worker,
 tell the user when there is an update available and let the user know when your PWA is ready to use offline.
*/

import 'https://cdn.jsdelivr.net/npm/@pwabuilder/pwaupdate';

const el = document.createElement('pwa-update');
document.body.appendChild(el);

//local part
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