# secreate
Test task for Secreate

Шаги для запуска демонстрации проекта:
1) git clone https://github.com/muturgan/secreate
2) cd secreate
3) npm i
4) npm run start
5) открыть в браузере страницу http://localhost:5454

Для удобства запуск происходит одной командой. Но по факту запускаются 2 отдельных приложения:
- src/source - имитация внешнего источника сущностей;
- src/secreate - включает в себя компоненты подписки на source, хранения в памяти последних значений сущностей, rest api и раздачи статики