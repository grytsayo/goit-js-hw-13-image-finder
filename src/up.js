// const goTopBtn = document.querySelector('.back_to_top');

// window.addEventListener('scroll', trackScroll); //отслеживать прокрутку документа
// goTopBtn.addEventListener('click', backToTop);  //отслеживать нажатие на кнопку и приводить в действие скролл «наверх»

// function trackScroll() {
//     const scrolled = window.pageYOffset;
//     const coords = document.documentElement.clientHeight;
// //добавляем/удаляем класс back_to_top-show
//     if (scrolled > coords) {
//       goTopBtn.classList.add('back_to_top-show');
//     }
//     if (scrolled < coords) {
//       goTopBtn.classList.remove('back_to_top-show');
//     }
// }
  
// function backToTop() {
//     if (window.pageYOffset > 0) {
//       window.scrollBy(0, -80);
//       setTimeout(backToTop, 50); //скорость
//     }
//   }