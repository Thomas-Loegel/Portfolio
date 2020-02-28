// Smooth Scroll
window.scrollBy({
   top: 100,
   left: 0,
   behavior: 'smooth'
});




// Social Menu Effect
document.addEventListener('DOMContentLoaded', () => {
   const button = document.querySelector('#socialButton');
   const menu = document.getElementById('socialMenu');

   button.addEventListener('mousedown', () => {
      menu.classList.toggle('show');
      button.classList.toggle('show');
   });
});
