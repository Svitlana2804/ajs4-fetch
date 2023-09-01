// Теоретичне питання
// Поясніть своїми словами, що таке AJAX і чим він корисний при розробці Javascript.
// За допомогою запитів, які ми надсилаємо на сервер та результатів які отримуємо , допомагає побудувати нові інтерфейси.
// Завдання
// Отримати список фільмів серії Зоряні війни та вивести на екран список персонажів для кожного з них.

// Технічні вимоги:
//+ Надіслати AJAX запит на адресу https://ajax.test-danit.com/api/swapi/films та отримати список усіх фільмів серії Зоряні війни
//+ Для кожного фільму отримати з сервера список персонажів, які були показані у цьому фільмі. Список персонажів можна отримати з властивості characters.
// Як тільки з сервера буде отримана інформація про фільми, відразу вивести список усіх фільмів на екрані. Необхідно вказати номер епізоду, назву фільму, а також короткий зміст (поля episodeId, name, openingCrawl).
// Як тільки з сервера буде отримано інформацію про персонажів будь-якого фільму, вивести цю інформацію на екран під назвою фільму.

const urlStar = "https://ajax.test-danit.com/api/swapi/films";
const filmsContainer = document.getElementById("starWars");
fetch(urlStar)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((film) => {
      const filmElement = document.createElement("div");
      filmElement.innerHTML = `
        <h2>Епізод ${film.episodeId}: ${film.name}</h2>
        <p>Короткий зміст: ${film.openingCrawl}</p>
      `;

      film.characters.forEach((characterUrl) => {
        fetch(characterUrl)
          .then((response) => response.json())
          .then((character) => {
            const characterElement = document.createElement("p");
            characterElement.textContent = `Персонаж:> ${character.name}`;
            filmElement.appendChild(characterElement);
          });
      });

      filmsContainer.appendChild(filmElement);
    });
  })
  .catch((error) => {
    console.log(error);
  });
