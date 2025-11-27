## MedicalServices

Адаптивний веб-застосунок для онлайн-запису пацієнтів на прийом. Інтерфейс поєднує ролі пацієнта, лікаря та адміністратора, демонструючи сучасні практики верстки (CSS Grid/Flexbox, медіа-запити, бургер-навігація, анімації).

### Основні можливості
- **Hero-блок із KPI**: зображення клініки в співвідношенні 16:9 та ключові показники сервісу (24/7, 5 хв на підтвердження).
- **Секція «Про нас / Послуги / Запис»**: картки з адаптивною сіткою та плавною появою через Intersection Observer.
- **Процес запису та сценарії**: опис етапів взаємодії й поведінки макета на різних роздільних здатностях.
- **Форма «Онлайн-запис на прийом»**: центрований заголовок і форма, що масштабується від мобільних до десктопів, із доступними підказками.
- **Стилі та JS**: власна дизайн-система в `wwwroot/css/site.css` та мінімальний JS (`wwwroot/js/site.js`) для бургер-меню та анімації карток.

### Технологічний стек
- **ASP.NET Core 9 (MVC)** — рендеринг Razor-сторінок.
- **Manrope + кастомні CSS змінні** — єдина типографіка і кольорова тема.
- **Flexbox/Grid + media queries** — адаптивність під ≥1200px, 900px, 768px, 600px.
- **JS (ES6)** — керування навігацією та Intersection Observer.

### Файлова структура
```
MedicalServices/
├─ MedicalServices.sln
└─ MedicalServices/
   ├─ Controllers/           # MVC-контролери (HomeController)
   ├─ Views/                 # Razor-сторінки (Home/Index.cshtml – головна)
   ├─ wwwroot/
   │  ├─ assets/             # Лого та медіа (family-doctor.jpg)
   │  ├─ css/site.css        # Основні стилі
   │  └─ js/site.js          # Клієнтська логіка
   ├─ docs/practical-work-2.md   # Звіт з практичної роботи
   └─ MedicalServices.csproj
```

### Передумови
- [.NET SDK 9.0](https://dotnet.microsoft.com/download)
- Будь-який сучасний браузер (Chrome, Edge, Firefox) для перевірки адаптивності.

### Запуск проєкту
```bash
git clone https://github.com/<your-account>/MedicalServices.git
cd MedicalServices
dotnet restore                    # встановлює пакунки
dotnet watch run --project MedicalServices/MedicalServices.csproj
```

Додаток стартує на `https://localhost:7046` (HTTPS) або `http://localhost:5043` (HTTP) залежно від профілю `launchSettings.json`. Відкрийте посилання у браузері та протестуйте адаптивність через DevTools → Device Toolbar (`Ctrl+Shift+M`).

### Подальша розробка
- Додати бекенд API для реального запису.
- Інтегрувати перевірку форм і збереження заявок у БД.
- Розгорнути на Azure Static Web Apps / GitHub Pages (через `dotnet publish` і копію `wwwroot`).

