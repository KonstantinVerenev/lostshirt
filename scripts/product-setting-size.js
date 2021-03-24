(function () {

  const controlls = document.querySelectorAll('.product-setting__size-item--available');
  const activeClass = 'product-setting__size-item--choosen';

  controlls.forEach(function (control) {
    control.addEventListener('click', function (e) {
      e.preventDefault();

      controlls.forEach(function (link) {
        link.classList.remove(activeClass);
      })

      control.classList.add(activeClass);

    })
  })
}())