# Getting Started

After clone this repository, run the following command to install the dependencies required for the project:

### `npm install`

In case of issues shown after the npm install, run the below to automatically fix the issues:

### `npm audit fix`

In the project directory, you can run the server by running the following command:

### `npm start`

Runs the app open [http://localhost:3000](http://localhost:3000) to view it in the browser.



# Тестовое задание BR Group для соискателей на должность Middle Frontend React

Нужно разработать интерфейс для сайта Hacker News, (https://news.ycombinator.com/news) состоящий из двух страниц.

Продуктовые требования

Главная страница
• Показывает последние 100 новостей в виде списка, отсортированного по дате, самые свежие сверху.
• Каждая новость содержит:
 ⁃ название
 ⁃ рейтинг
 ⁃ ник автора
 ⁃ дату публикации
 ⁃ счётчик количества комментариев
• По клику на новость происходит переход на страницу новости
• Список новостей должен автоматически обновляться раз в минуту без участия пользователя
• На странице должна быть кнопка для принудительного обновления списка новостей

Страница новости
• Должна содержать:
 ⁃ ссылку на новость
 ⁃ заголовок новости
 ⁃ дату
 ⁃ автора
 ⁃ счётчик количества комментариев
 ⁃ список комментариев в виде дерева
• Корневые комментарии подгружаются сразу же при входе на страницу, вложенные - по клику на корневой
• На странице должна быть кнопка для принудительного обновления списка комментариев
• На странице должна быть кнопка для возврата к списку новостей

Технические требования
• Приложение разработано с использованием React 
• Использование TypeScript
• Использован официальный API Hacker News. (https://github.com/HackerNews/API) Вызовы Hacker News API и обработка данных от него производятся напрямую с фронтенда
• Роутинг выполнен с использованием React Router V6
 (https://reactrouter.com/en/main)• Фреймворк UI любой на ваше усмотрение (как пример MUI). (https://mui.com/)
 ⁃ Можно и на чистом css, главное, чтобы было красиво
• Приложение должно запускаться по адресу localhost:3000 
• При переходах по ссылкам страница не перезагружается
• Исходный код решения должен быть выложен с вашего аккаунта на Github (http://github.com/) с Readme файлом с инструкцией по запуску
• Исходный код решения должен быть выложен с вашего аккаунта на Github (http://github.com/) с Readme файлом с инструкцией по запуску
• Ссылка на Live Demo проекта на любом хостинге (например, Netlify).

Опциональные задания
• Написать приложение с использованием Remix