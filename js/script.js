// Smooth Scroll
// window.scrollBy({
//    top: 100,
//    left: 0,
//    behavior: 'smooth',
// });



// Social Menu Effect
document.addEventListener('DOMContentLoaded', () => {
   const button = document.querySelector('#socialButton');
   const menu = document.getElementById('socialMenu');

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




// Burger Effect
// const button = document.querySelector('.burger-button');
// const onClick = function() {
//   button.classList.toggle('is-active');
// };
//
// button.addEventListener('click', onClick, false);
