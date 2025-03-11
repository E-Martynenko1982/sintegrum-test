document.addEventListener('DOMContentLoaded', function () {
  // Ищем все элементы, у которых есть класс .program-course-item__arrow
  const arrowItems = document.querySelectorAll('.program-course-item__arrow');

  arrowItems.forEach(item => {
    // Находим кнопки внутри этого элемента
    const openBtn = item.querySelector('.open-list-btn');
    const closeBtn = item.querySelector('.close-list-btn');

    // Клик по кнопке "открыть"
    if (openBtn) {
      openBtn.addEventListener('click', () => {
        // Добавляем класс .active, чтобы отобразить подсписок и показать кнопку "закрыть"
        item.classList.add('active');
      });
    }

    // Клик по кнопке "закрыть"
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        // Убираем класс .active, скрываем подсписок, возвращаем кнопку "открыть"
        item.classList.remove('active');
      });
    }
  });
});


