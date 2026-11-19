/* =========================================================
   ДАННЫЕ САЙТА — редактируйте только этот файл,
   чтобы поменять контакты или добавить новость.
   ========================================================= */

window.SITE = {
  name: "Объединённая первичная профсоюзная организация Московского политехнического университета",
  shortName: "Профком Политеха",
  address: "ул. Большая Семёновская, д. 38",
  room: "Аудитория В-202",
  hours: { days: "ПН–ПТ", time: "10:30–17:30" },
  phone: "+7 (495) 223-05-31",
  phone2: "+7 (495) 223-05-23 доб. 1396",
  vk: "https://vk.ru/profkommospolytech",
  tg: "https://t.me/profkommospolytech",
  bot: "https://t.me/profcommospolytech_bot",   // чат-бот «Твой проф»: вступление, номер профбилета, калькулятор выплат
  email: "profkom@mospolytech.ru",
  lk: "https://e.mospolytech.ru/",              // личный кабинет студента
  join: "https://www.eseur.ru/",                // сайт Общероссийского Профсоюза образования (онлайн-вступление)
  mapQuery: "Москва, ул. Большая Семёновская, 38"
};

/* Ссылки на документы (используются через data-doc="ключ") */
window.DOCS = {
  matpomPolicy: "https://mospolytech.ru/upload/medialibrary/929/polozhenie-o-poryadke-okazaniya-materialnoj-podderzhki-nuzhdayushchimsya-obuchayushchimsya-22062023.pdf",
  matpomList: "https://disk.yandex.ru/i/TQfjH9T1ufhwaQ",
  dotationList: "https://disk.yandex.ru/i/UqcnobixO2z2wg",
  payGuide: "https://vk.ru/@profkommospolytech-putevoditel-po-vyplatam",
  joinGuide: "https://vk.ru/wall-5563729_33710"
};

/*
  Новости. Новые — добавляйте В НАЧАЛО списка.
  category: "Новости" | "Мероприятия" | "Выплаты" | "Льготы"
  cover.style: "light" | "dark" | "blue"   (или cover.image: "img/news/файл.jpg")
  cover.title: текст на обложке, <span class="accent">…</span> — выделение цветом
  cover.mascot: "wave" | "wow" | "ok" | "" (персонаж на обложке)
*/
window.NEWS = [
  {
    date: "2026-11-17",
    category: "Новости",
    title: "С Международным днём студента!",
    text: "Пусть сессии будут лёгкими, экзамены — сданными, а знания — прочными! Спасибо, что вы с нами.",
    cover: { style: "light", title: 'С Днём <span class="accent">студента!</span>', mascot: "wave" },
    link: ""
  },
  {
    date: "2026-11-12",
    category: "Льготы",
    title: "Облачное хранилище для студентов: 1 ТБ за 1 рубль",
    text: "Для членов профсоюза доступно облако на 1 ТБ по специальной цене. Подробности и инструкция — в посте.",
    cover: { style: "dark", title: "Облачное хранилище<br>для студентов", mascot: "wow" },
    link: ""
  },
  {
    date: "2026-11-05",
    category: "Мероприятия",
    title: "Экскурсия от ФК «Спартак-Москва»",
    text: "11 ноября в 13:30 — экскурсия для фанатов футбола. Количество мест ограничено, регистрируйся заранее!",
    cover: { style: "light", title: 'Экскурсия<br><span class="accent">от ФК Спартак</span>', mascot: "ok" },
    link: ""
  },
  {
    date: "2026-10-28",
    category: "Выплаты",
    title: "Дотация за 3 квартал",
    text: "Выплата уже поступает на карты. Если деньги не пришли — загляни в В-202, разберёмся.",
    cover: { style: "blue", title: 'Дотация<br><span class="accent">за 3 квартал</span>', mascot: "wave" },
    link: ""
  },
  {
    date: "2026-10-20",
    category: "Выплаты",
    title: "Социальная стипендия и как её получить",
    text: "ГСС — 3 500 ₽ в месяц, ПГСС — 14 000 ₽ в месяц. Кому положена, какие нужны документы и как подать заявление через личный кабинет.",
    cover: { style: "light", title: 'Социальная стипендия<br><span class="accent">и как её получить</span>', mascot: "ok" },
    link: ""
  },
  {
    date: "2026-10-14",
    category: "Мероприятия",
    title: "Новый розыгрыш: билеты на матч и футболка с автографом",
    text: "Выиграй билеты на матч и игровую футболку с автографом Романа Зобнина. Условия участия — в сообществе ВК.",
    cover: { style: "dark", title: 'А у нас<br>новый розыгрыш!', mascot: "wow" },
    link: ""
  },
  {
    date: "2026-10-01",
    category: "Новости",
    title: "Студент, внимание!",
    text: "Если ты подавал заявление на выплаты с 30 сентября по 16 октября, его нужно подать заново.",
    cover: { style: "light", title: 'Студент,<br><span class="accent">внимание!</span>', mascot: "wow" },
    link: ""
  },
  {
    date: "2026-09-24",
    category: "Мероприятия",
    title: "Кастинг на фестиваль «Первокурсник: первый шаг»",
    text: "Попробуй себя в одном из семи творческих направлений в нашем университете!",
    cover: { style: "blue", title: 'Первокурсник:<br><span class="accent">первый шаг</span>', mascot: "" },
    link: ""
  },
  {
    date: "2026-09-10",
    category: "Льготы",
    title: "Подарки для тебя: обложка для студенческого",
    text: "Приходи в В-202 за обложкой для студенческого билета!",
    cover: { style: "light", title: 'Подарки<br><span class="accent">для тебя</span>', mascot: "wave" },
    link: ""
  },
  {
    date: "2026-09-01",
    category: "Выплаты",
    title: "Начался приём документов на повышенную стипендию",
    text: "И на стипендию Московского Политеха для студентов. Сроки и список документов — в посте.",
    cover: { style: "dark", title: "Начался приём<br>документов на повышенную стипендию", mascot: "" },
    link: ""
  }
];
