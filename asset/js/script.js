// Burger Menu Effect
document.addEventListener('DOMContentLoaded', () => {
   const burger = document.querySelector('#burger');
   const topMenu = document.querySelector('#topMenu');

   burger.addEventListener('mousedown', () => {
      topMenu.classList.toggle('slide');
      burger.classList.toggle('slide');
   });
});




// Social Menu Effect
document.addEventListener('DOMContentLoaded', () => {
   const button = document.querySelector('#socialButton');
   const menu   = document.getElementById('socialMenu');

   button.addEventListener('mousedown', () => {
      menu.classList.toggle('show');
      button.classList.toggle('show');
   });
});




// Modal Effect
const modal = document.getElementById('modal');
const btn   = document.getElementById('modalButton');
const span  = document.getElementsByClassName('close')[0];

btn.onclick = function(e) {
   e.preventDefault();
   modal.style.display = 'block';
}

span.onclick = function() {
   modal.style.display = 'none';
}

window.onclick = function(event) {
   if (event.target == modal) {
      modal.style.display = 'none';
   }
}




document.addEventListener('DOMContentLoaded',function(event){
   // array with texts to type in typewriter
   let dataText = [
      "le travail d'équipe !",
      "résoudre des problèmatiques !",
      "être autonome !",
      "garder un oeil critique sur son travail !",
      "l'auto formation !",
      "faire des présentations technologiques !",
      "la méthodologie !",
      "faire de la veille efficace !",
   ];

   // type one text in the typwriter
   // keeps calling itself until the text is finished
   function typeWriter(text, i, fnCallback) {
      // chekc if text isn't finished yet
      if (i < (text.length)) {
         // add next character to h1
         document.getElementById("typing").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

         // wait for a while and call this function again for next character
         setTimeout(function() {
            typeWriter(text, i + 1, fnCallback)
         }, 50);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == 'function') {
         // call callback after timeout
         setTimeout(fnCallback, 2000);
      }
   }
   // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
      if (typeof dataText[i] == 'undefined'){
         setTimeout(function() {
            StartTextAnimation(0);
         }, 50);
      }
      // check if dataText[i] exists
      if (i < dataText[i].length) {
         // text exists! start typewriter animation
         typeWriter(dataText[i], 0, function(){
            // after callback (and whole text has been animated), start next text
            StartTextAnimation(i + 1);
         });
      }
   }
   // start the text animation
   StartTextAnimation(0);
});




// Form Effect
const name = document.getElementById('name');
const nameLabel = document.getElementById('name-label');

const mail = document.getElementById('mail');
const mailLabel = document.getElementById('mail-label');

const message = document.getElementById('message');
const messageLabel = document.getElementById('message-label');


name.addEventListener("focusin", nameFocus);
mail.addEventListener("focusin", mailFocus);
message.addEventListener("focusin", messageFocus);

function nameFocus() {
  nameLabel.style.top = '-1rem';
  nameLabel.style.fontSize = '0.9rem';
}
function mailFocus() {
  mailLabel.style.top = '-1rem';
  mailLabel.style.fontSize = '0.9rem';
}
function messageFocus() {
  messageLabel.style.top = '-1rem';
  messageLabel.style.fontSize = '0.9rem';
  message.style.height = '10rem';
}










//
