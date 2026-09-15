/**
 * ┌─────────────────────────────────────────────────────────────────┐
 * │  ДАННЫЕ БРЕНДА — правится в одном месте                          │
 * └─────────────────────────────────────────────────────────────────┘
 * Всё, что меняется при передаче сайта реальной бургерной: домен, название,
 * адрес, телефон, часы, соцсети, навигация, тексты кнопок. Разметка их не
 * хардкодит — берёт отсюда.
 *
 * TROHAMBURGER — концепт для портфолио. Адрес/телефон/часы — заглушки
 * (помечены как «уточняется»), меняются здесь, когда появится настоящая точка.
 *
 * Соседние файлы данных:
 *   - src/config/seo.mjs   — title/description страниц
 *   - src/data/menu.mjs    — меню и цены
 */

/** Домен. Заменить на реальный перед деплоем — от него зависят canonical и sitemap. */
export const SITE_URL = 'https://trohamburger.ru';

export const SITE = {
  brand: 'TROHAMBURGER',
  brandShort: 'TROHA',
  brandTagline: 'Smash-бургеры',
  category: 'Крафтовая бургерная',
  city: 'город (концепт)',
  lang: 'ru',
  locale: 'ru_RU',
  isConcept: true,
  /** Год «открытия» — для текстов «с 2019». Концепт. */
  since: '2019',
};

export const BUSINESS = {
  legalName: 'TROHAMBURGER',
  address: {
    streetAddress: '',
    addressLocality: '',
    addressRegion: '',
    postalCode: '',
    addressCountry: 'RU',
    display: 'Адрес уточняется. Появится, как только откроем двери на новой точке.',
  },
  geo: { latitude: '', longitude: '' },
  openingHours: [
    { days: ['Mo', 'Tu', 'We', 'Th'], opens: '11:00', closes: '23:00' },
    { days: ['Fr', 'Sa'], opens: '11:00', closes: '01:00' },
    { days: ['Su'], opens: '12:00', closes: '23:00' },
  ],
  openingHoursDisplay: [
    { label: 'Пн–Чт', value: '11:00 – 23:00' },
    { label: 'Пт–Сб', value: '11:00 – 01:00' },
    { label: 'Вс', value: '12:00 – 23:00' },
  ],
  areaServed: 'город и ближние районы',
  priceRange: '₽₽',
};

export const CONTACTS = {
  phoneRaw: '+70000000000',
  phoneDisplay: '+7 000 000-00-00',
  telegram: 'https://t.me/trohamburger',
  whatsapp: 'https://wa.me/70000000000',
  email: 'hello@trohamburger.ru',
  instagram: 'https://instagram.com/trohamburger',
  /** Ссылка на агрегаторы доставки. Пусто — кнопка скрыта. */
  deliveryYandex: '',
  deliveryDeliveryClub: '',
};

export const ANALYTICS = {
  yandexMetrikaId: '',
  googleAnalyticsId: '',
  googleTagManagerId: '',
};

export const FORM = {
  endpoint: '/api/lead',
};

/**
 * ЗАКАЗЫ В TELEGRAM.
 * ------------------------------------------------------------------
 * Чтобы заказы с сайта падали в Telegram, заполните два поля:
 *   botToken — токен бота от @BotFather (например 123456:AA...)
 *   chatId   — id чата/канала, куда слать заказы (узнать: напишите боту
 *              и откройте https://api.telegram.org/bot<token>/getUpdates)
 *
 * Пока поля пустые — корзина работает в демо-режиме: показывает, что заказ
 * оформлен, но никуда не отправляет.
 *
 * ВНИМАНИЕ: при таком (клиентском) способе токен виден в коде страницы. Для
 * витрины/портфолио это ок. Для боевого сайта лучше слать заказ через свою
 * серверную функцию (Astro-адаптер + endpoint) и хранить токен в переменных
 * окружения.
 */
export const TELEGRAM = {
  botToken: '',
  chatId: '',
};

/** Навигация — единый источник для шапки, подвала и карты сайта. */
export const NAV = [
  { href: '/menu/', label: 'Меню' },
  { href: '/o-nas/', label: 'О нас' },
  { href: '/kontakty/', label: 'Контакты' },
];

/** Тексты призывов к действию — чтобы формулировки не расходились. */
export const CTA = {
  primary: 'Заказать',
  secondary: 'Смотреть меню',
  order: 'Заказать',
  book: 'Забронировать стол',
};
