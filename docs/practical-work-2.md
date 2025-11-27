## 2 Розроблення адаптивного інтерфейсу web-застосунку

### 2.1 Структура проєкту

```
MedicalServices/
├─ docs/
│  └─ practical-work-2.md        # текстовий звіт практичної
├─ Views/Home/Index.cshtml       # головна сторінка (аналог index.html)
├─ wwwroot/
│  ├─ assets/logo.svg            # графіка та медіа
│  ├─ css/site.css               # адаптивні стилі
│  └─ js/site.js                 # поведінка (бургер, анімації)
└─ ...
```

HTML-шаблон `Index.cshtml` відіграє роль `index.html`, а каталоги `wwwroot/css`, `wwwroot/js` та `wwwroot/assets` зберігають стилі, скрипти та ресурси відповідно до методичних вимог кафедри.

### 2.2 Шапка й навігація

```12:34:Views/Home/Index.cshtml
<header class="primary-header" data-header>
    <div class="logo">
        <img src="~/assets/logo.svg" alt="Medical Services logo" />
        <div>
            <p class="logo__label">MedBook</p>
            <p class="logo__tagline">online запис пацієнтів</p>
        </div>
    </div>
    <nav id="main-nav" class="primary-nav" data-nav aria-label="Головна навігація">
        <a href="#about">Про нас</a>
        <a href="#booking">Запис</a>
        <a href="#contacts">Контакти</a>
    </nav>
    <button class="nav-toggle" data-menu-toggle aria-expanded="false">
        ...
    </button>
</header>
```

Навігація являє собою гнучку сітку: на десктопі відображається горизонтальне меню, на малих екранах кнопка з `data-menu-toggle` відкриває компактне «бургер-меню». Для плавного відкриття використано CSS-перехід (`transition`) і клас `is-open`, який встановлюється у `site.js`.

Поверх шапки розміщено герой-блок із медичним фото та ключовими показниками сервісу.

```25:39:Views/Home/Index.cshtml
<section class="hero">
    <div class="hero__media">
        <img src="~/assets/family-doctor.jpg" alt="Лікар проводить огляд дитини разом з батьками" loading="lazy" />
        <ul class="metrics">
            ...
        </ul>
    </div>
</section>
```

Зображення збережено локально у каталозі `wwwroot/assets/family-doctor.jpg`, тому його легко замінити при потребі. В `site.css` властивість `aspect-ratio: 21 / 9` вирівнює фото з макетом і прибирає спотворення.

### 2.3 Основний блок

```320:354:wwwroot/css/site.css
.info-flow {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
  gap: 1.6rem;
}

.flow-card {
  background: var(--surface);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  padding: 2rem;
}
```

```42:59:Views/Home/Index.cshtml
<section id="about" class="info-flow">
    <article class="flow-card">
        <p class="flow-card__title">Опис організації</p>
        <p>MedBook — це цифровий довідник...</p>
    </article>
    <article class="flow-card">
        <p class="flow-card__title">Послуги</p>
        <ul>...</ul>
    </article>
    <article class="flow-card">
        <p class="flow-card__title">Запис на прийом</p>
        <a class="btn primary" href="#booking">Залишити заявку</a>
    </article>
</section>
```

### 2.4 Нижній колонтитул

```98:110:Views/Home/Index.cshtml
<footer id="contacts" class="primary-footer">
    <div>
        <p class="logo__label">MedBook</p>
        <p>м. Київ, вул. Київська, 67</p>
    </div>
    <div>
        <p>Контактний центр: <a href="tel:+380665556767">+38 (066) 555-67-67</a></p>
        <p>Email: <a href="mailto:medical.services@example.com">medical.services@example.com</a></p>
    </div>
    <div>
        <p>GitHub: <a href="https://github.com">github.com</a></p>
        <p>&copy; 2025 MedBook</p>
    </div>
</footer>
```

Footer містить контактну інформацію та посилання на відкритий репозиторій. Блок оформлено в темній кольоровій гамі для контрасту й читабельності.

### 2.5 Форма запису

Заключний блок сторінки — адаптивна форма запису, побудована на flex/grid.

```62:94:Views/Home/Index.cshtml
<section id="booking" class="booking">
    <div class="booking__intro">
        ...
    </div>
    <form class="booking__form">
        <label>
            <span>Ім’я та прізвище</span>
            <input type="text" name="fullName" required />
        </label>
        ...
    </form>
</section>
```

```404:442:wwwroot/css/site.css
.booking {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
  gap: 2rem;
  background: var(--surface);
  border-radius: var(--radius);
  justify-items: center;
  text-align: center;
}

.booking__form {
  width: min(100%, 48rem);
}

.booking__form input,
.booking__form select,
.booking__form textarea {
  border: 1px solid var(--border);
  border-radius: 0.8rem;
  padding: 0.9rem 1.2rem;
}
```

### 2.6 Функціонально-стилістичні рішення

- **Медіа-запити.** Пороги 1200 px, 900 px, 768 px та 600 px коригують розміри шрифтів, кількість колонок, поведінку меню.
- **Відносні одиниці.** `rem`, `vw`, `clamp()` та відсотки використовуються для відступів, розмірів кнопок і шапки.
- **Анімації/ефекти.** Плавне відкриття меню (`opacity + translateY`), hover-ефекти на кнопках, «плаваючі» показники в hero-блоці.
- **JavaScript.** Файл `wwwroot/js/site.js` містить лише необхідну логіку: перемикання класу `is-open` та reveal-анімації карток.

### 2.7 Розміщення у GitHub

1. Ініціалізувати репозиторій або додати віддалений:
   ```
   git init
   git remote add origin https://github.com/<user>/MedicalServices.git
   ```
2. Приклади змістовних комітів:
   - `feat(ui): add responsive header with burger menu`
   - `style(css): implement adaptive grid and animations`
   - `docs(practice-2): describe adaptive UI implementation`
3. Розміщення результатів: GitHub Pages для статичної збірки (`dotnet publish` → `wwwroot`) або Azure Static Web Apps.

### 2.8 Скріншоти для звіту

Збережіть приклади рендеру сторінки (`docs/media/desktop.png`, `docs/media/tablet.png`, `docs/media/mobile.png`) через DevTools → Device Toolbar (`Ctrl+Shift+M`). Вставте їх у цей файл нижче даного підрозділу.

---

**Перевірка адаптивності:** відкрийте сторінку у браузері та змінюйте ширину вікна. Переконайтеся, що бургер-меню закривається автоматично при втраті фокусу, а картки не перекриваються на роздільних здатностях смартфона, планшета та десктопа.

