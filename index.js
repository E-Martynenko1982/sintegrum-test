document.addEventListener('DOMContentLoaded', function () {

  const arrowItems = document.querySelectorAll('.program-course-item__arrow');

  arrowItems.forEach(item => {

    const openBtn = item.querySelector('.open-list-btn');
    const closeBtn = item.querySelector('.close-list-btn');

    if (openBtn) {
      openBtn.addEventListener('click', () => {

        item.classList.add('active');
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {

        item.classList.remove('active');
      });
    }
  });
});


