document.querySelector('.hamburger').addEventListener('click', () => {
    console.log("Hamburguesa clickeada");
    document.querySelector('.nav-links').classList.toggle('expanded');
  });