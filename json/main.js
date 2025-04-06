document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('.highlight-link');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // предотвращаем переход по ссылке

            const targetId = link.getAttribute('href').slice(1);  // Получаем id элемента из href
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Прокручиваем страницу к нужному элементу
                targetElement.scrollIntoView({
                    behavior: "smooth", // плавная прокрутка
                    block: "start"      // элемент будет выведен в начало видимой области
                });

                // Добавляем анимацию подсветки
                targetElement.classList.add('highlight');
                
                // Убираем подсветку через 3 секунды
                setTimeout(() => {
                    targetElement.classList.remove('highlight');
                }, 3000);
            }
        });
    });
});