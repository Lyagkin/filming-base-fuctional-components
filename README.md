Проект собран при помощи Create React App.

Команды для работы с проектом:

для запуска напишите в терминале:

`npm start`.

Страница будет перезагружена при внесении изменений. Вы также можете увидеть какие-либо ошибки в консоли.

`npm run build`.

Приложение собирается для производства в папку build. Сборка минимизирована, а имена файлов содержат хэши. Ваше приложение готово к развертыванию!

`npm run eject`.

**Примечание: это операция в один конец.**. 

Если вас не устраивает инструмент сборки и выбор конфигурации, вы можете изменить ее в любое время с помощью этой команды. Эта команда удалит зависимость от основной сборки из вашего проекта. Вместо этого, он скопирует все файлы конфигурации и транзитивные зависимости (webpack, Babel, ESLint и т.д.) прямо в ваш проект, так что вы будете иметь полный контроль над ними. Все команды, за исключением @ejectḥ все еще будут работать, но они будут указывать на скопированные скрипты, так что вы можете настроить их.

Сам проект базовый. Используются как классовые так и функциональные компоненты. Применялся только один компонент жизненного цикла классовых компонентов - componentDidMount. Для простоты работы со стилями использовалась библиотека materialize.css - так же как и для общей практики. Прилижение работает на get запросах и fetch. Осуществлена работа с состоянием компонентов - в основной компонент приходит информация от открытой API - https://www.omdbapi.com/ - это библиотека с информацией о фильмах. Информация сохраняется в состояние ключевого родительского компонента <Main/> в виде массива с объектами и прокидывается в дочерние через пропсы, где с помощью метода map раскладывается на отдельные компоненты с ключевой информацией. Отображение фильмов происходит при стартовом рендере приложения, при отправке запроса на сервер API внутри componentDidMount, с предварительным показом прелоудера или ошибки - в зависимости от результата запроса. Значения этих результатов так же хранятся в состоянии ключевого компонента <Main/> и изменяются в процессе обработки ответа от сервера API. При положительном сценарии отображаются фильмы для стартового запроса, далее пользователь может искать через поле ввода любой интересующий его фильм - но только на английском языке. Так же есть три фильтра - для отображения фильмов, сериалов или того и другого вместе.
