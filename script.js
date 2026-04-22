// Highlight active nav link on click
const navLinks = document.querySelectorAll('.menubar ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});