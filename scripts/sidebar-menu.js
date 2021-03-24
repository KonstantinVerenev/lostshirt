(function () {

  let openButton = document.querySelector('.sidebar__hamburger');
  let closeButton = document.querySelector('.sidebar__close');
  let sideBar = document.querySelector('.sidebar');

  openButton.addEventListener('click', function () {
    sideBar.classList.add('sidebar--opened')
  });

  closeButton.addEventListener('click', function () {
    sideBar.classList.remove('sidebar--opened')
  });

}())