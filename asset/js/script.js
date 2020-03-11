// Social Menu Effect
document.addEventListener('DOMContentLoaded', () => {
   const burger = document.querySelector('#burger');
   const topMenu   = document.querySelector('#topMenu');

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



// Form Effect
//const input = document.querySelector('.input');
const textarea = document.querySelector('.textarea');
const label = document.querySelector('#label');

//input.addEventListener("focusout", focus);
textarea.addEventListener("focusout", focus);

function focus() {
  label.style.top = '-1rem';
  label.style.fontSize = '0.9rem';
  label.style.letterSpacing = 'normal';
  //alert("focus !");
}












//
