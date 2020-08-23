const anchors = document.querySelectorAll('a.home-menu__link')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const blockID = anchor.getAttribute('href')
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
};

$(document).ready(function () {
  $('.gallery-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true
    //autoplay: true,
    //autoplaySpeed: 3000
  });
});