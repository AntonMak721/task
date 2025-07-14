# Task Manager - Angular Application

## Описание

Простое Angular-приложение для управления задачами с возможностями:
- Просмотра списка задач
- Добавления новых задач
- Удаления задач
- Просмотра деталей задачи
- Изменения статуса задачи
- Поиска и фильтрации задач

## Требования

- Node.js (версия 16.x или выше)
- npm (версия 8.x или выше) или yarn
- Angular CLI (версия 18)

## Установка

1. Клонируйте репозиторий:
```bash
git clone https://github.com/your-repository/task-manager.git
cd task-manager
```

2. Установите зависимости:
```bash
npm install
# или
yarn install
```

## Запуск приложения

1. Запустите сервер разработки:
```bash
ng serve
```

2. Откройте приложение в браузере:
```
http://localhost:4200
```

## Сборка для production

Для сборки оптимизированной версии приложения выполните:
```bash
ng build --configuration production
```

Собранные файлы будут доступны в папке `dist/task-manager`.

## Структура проекта

```
src/
├── app/
│   ├── components/
│   │   ├── task-list/       # Компонент списка задач
│   │   ├── task-form/       # Форма добавления/редактирования
│   │   └── task-details/    # Детали задачи
│   ├── models/
│   │   └── task.model.ts    # Интерфейсы задач
│   ├── services/
│   │   └── task.service.ts  # Логика работы с задачами
│   ├── app-routing.module.ts # Маршрутизация
│   └── app.module.ts        # Главный модуль
├── assets/                  # Статические файлы
└── styles/                  # Глобальные стили
```

## Используемые технологии

- Angular 18
- TypeScript
- RxJS
- Reactive Forms
- SCSS для стилей

## Доступные команды

- `ng serve` - запуск dev-сервера
- `ng build` - сборка проекта
- `ng lint` - проверка кода линтером

## Лицензия

[MIT License](LICENSE)