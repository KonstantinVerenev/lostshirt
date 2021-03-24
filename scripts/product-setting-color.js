(function () {

  const controlls = document.querySelectorAll('.product-setting__color-item');
  const activeClass = 'product-setting__color-item--choosen';

  controlls.forEach(function (control) {
    control.addEventListener('click', function (e) {
      e.preventDefault();

      let colorName = control.getAttribute('data-color');

      console.log(colorName)

      if (colorName == 'white') {
        document.querySelector('.product-view-img').src = './img/tshirts/tshirt_08.png'
      } else if (colorName == 'green') {
        document.querySelector('.product-view-img').src = './img/tshirts/tshirt_09.png'
      } else if (colorName == 'blue') {
        document.querySelector('.product-view-img').src = './img/tshirts/tshirt_10.png'
      } else if (colorName == 'red') {
        document.querySelector('.product-view-img').src = './img/tshirts/tshirt_11.png'
      } else if (colorName == 'black') {
        document.querySelector('.product-view-img').src = './img/tshirts/tshirt_07.png'
      }


      controlls.forEach(function (link) {
        link.classList.remove(activeClass);
      })

      control.classList.add(activeClass);

    })
  })
}())


/* product-view-img */