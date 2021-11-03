module.exports = {
  excludeFiles: [
    ".git",
    "bookinfo.xml",
    "**/*.{yml,js}",
  ],
  format: "html",
  lang: "ru",
  fileExtensions: [
    ".xml"
  ],
  ignoreUrls: true,
  ignoreDigits: true,
  ignoreCapitalization: true,
  ignoreUppercase: true,
  ignoreLatin: true,
  checkYo: true,
  dictionary: [
    "(.*)(буквен|символьн|битн).*",
    "(авто)?коммит.*",
    "(авто)?рендер.*",
    "(б|Б)(э|е)кенд.*|(ф|Ф)ронтенд.*",
    "(де)маршалинг.*",
    "(Де|де)?(с|С)ериализ.*",
    "(за)?(х|Х)еш.*",
    "(за|не)?(к|К)еш.*",
    "(М|м)ногобайтов.*",
    "(не)?булев.*",
    "(не)?версионирован.*",
    "(не)?заякор.*",
    "(не)?каталогизирован.*",
    "(не)?криптографически.*",
    "(не)?транзакцион.*",
    "(не|за)?буфери.*",
    "(П|п)севдотип",
    "(пере|де|ре)инициал.*",
    "(про)?(п|П)атч.*",
    "(про|за)?экрани.*",
    "(фрагментатор|фрагментер).*",
    "Абстрактн.*",
    "авто(определ|дополн|подтверждени|фильтр|обрезк|инкремент|подгрузчик|глобал|логин|вивификаци).*",
    "автофиксаци.*",
    "Айти",
    "апплет.*",
    "аптайма",
    "атомарны",
    "аудиопоток.*",
    "аудиоформат.*",
    "баг.*",
    "бакет.*",
    "балансировщик.*",
    "батч",
    "беззнак.*",
    "бинарник.*",
    "бинарно",
    "битмаска",
    "бэкап.*",
    "вендор",
    "вендор.*",
    "версион.*",
    "верхнеуровневым",
    "виньетный",
    "внутрисерверных",
    "воркер.*",
    "вуаля",
    "выбранност.*",
    "высоко(оптимизирован|загружен).*",
    "геопространственн.*",
    "глобализуются",
    "гореш|гершаим",
    "графемн.*",
    "датаграм.*",
    "дебаггер.*",
    "декскриптор.*",
    "деструктурирован.*",
    "дефрагментирует",
    "джиттер.*",
    "дизеринг.*",
    "Диофантового",
    "долго(выполняемых|работающих)",
    "дорелизн.*",
    "доступне",
    "задокументирован.*",
    "закольцов.*",
    "запускатель",
    "затратно|затратнее",
    "Змиевски|Мэлин|Баккен|Стиг|Сураски|Гутманс|Лердорф.*|Хэнстридж|Кромману|Виеброка|Картуса|Аткинсона|Диффи|Хеллмана|Мерсена|Кастаноли|Анилу|Тишрей|Элул|Нейгла|Игелем|Редмиллером|Хаскиным|Фальманом|Крокфорда|Хилмана|Киссенджера|Фридла|Боллинджера|Апмсер|Хэйсэй|Блэкмана|Синк|Леманном|Клавиусом|Алоизием|Лилиусом|Мадхавапедди|Хэйз|Маллет|Мерсенна|Мерсена|Микио|Хансон.*|Хирабаяши|Такури|Лавато|Кэти|Дерик|Ретанс",
    "имитовставк.*",
    "иммутабельн.*",
    "инвалидац.*",
    "инжинеринг.*",
    "инсталятор.*",
    "инстанци.*",
    "инструментирован.*",
    "интент.*",
    "интерлейсинг.*",
    "кандидатные",
    "керберизованными",
    "кибибайт.*",
    "клик.*",
    "комбо",
    "контекстно",
    "контравариантны",
    "кракозябры",
    "криптографически",
    "кросс(домен).*",
    "кроссплатформе.*",
    "лайк.*",
    "лекс.*",
    "линеаризуем.*",
    "лог.*",
    "логировани.*",
    "лок.*",
    "локал.*",
    "люминизиру.*",
    "маппинг.*",
    "марубозу|Тасуки|Тристар|Моментум",
    "маршал.*",
    "массивоподобное",
    "масштаб.*",
    "меж(поточн|сайт|процесс).*",
    "мета(поиск|тег|оператор).*",
    "много(байт|сесси).*",
    "моникер.*",
    "монитор.*",
    "мульти(запрос|встав|байт|платформ|плексн|дескриптор|плекс).*",
    "мьютекс.*",
    "назначится",
    "не?(перехва|отлавливаем|пойман).*",
    "не?(скалярн|инкрементн).*",
    "не?(строков|строч|литерал|скалярн|относител|доверен|конфиденциальн|валидн|модифицирован|назначен|статичн|перенаправлен|отладочн|нестрочн|буфериз|сериализ|подготав|версионирован).*",
    "недозаписанные",
    "недополнения",
    "неинтуитивное",
    "некаталогизированное",
    "неотвеченные",
    "неподсоединённых",
    "непробельн.*",
    "нерепликационных",
    "несброшенные",
    "нефатальной",
    "низкозагруженных",
    "нод.*",
    "обнуляемост.*",
    "обфусцирован.*",
    "общеупотребляемых",
    "объектно",
    "обтравочн.*",
    "одно(ранг|класс).*",
    "оконцовок",
    "опкод.*",
    "отдельностоящих",
    "отрисов.*",
    "пайп.*",
    "палитров.*",
    "парсит",
    "партиционирован.*",
    "пере(подключ|собират|авторизов|заплан|использова|сборк|синхронизаци|посыл|привяз|иниц|открыв).*",
    "пере(соедин|использ|автор).*",
    "переаллокацию",
    "перенаправлений",
    "пересвязки",
    "перехеширован",
    "пикселировани.*",
    "пинг.*",
    "платформонезависим.*",
    "плейсхолдер.*",
    "по(бит|байт)ово",
    "под(формат|домен|тег|маск|масок|шаблон|поток|элемент|массив|вектор|очередь|пакет|процесс|грузк|виснут).*",
    "подгрузились",
    "подытератор.*",
    "полизаполнения",
    "полиномическую",
    "полифил",
    "полно(связных|секундное)",
    "помодульно",
    "попроцессную",
    "портирован.*",
    "постпроцессинг.*",
    "потоко-небезопасную",
    "потоко(-небезопасн.)?.*",
    "потоко(не)?безопас.*",
    "потокоориентирован.*",
    "пре(компилирован|прокси).*",
    "преавторизованной",
    "превью",
    "пред(просмотр|загруж|загруз).*",
    "пререквизиты",
    "примонтиро.*",
    "присваем.*",
    "продакшен.*",
    "проигнориру.*",
    "проитериро.*",
    "прокси.*",
    "пролептическ.*",
    "проприетарност.*",
    "прослушивател.*",
    "псевдо(объект|массив|тип|терминал|изображени|формат).*",
    "пул.*",
    "пуш.*",
    "радиокнопк.*",
    "разблокируется",
    "развесовк.*",
    "разветления",
    "разграничителей",
    "разработческ.*",
    "разыменов.*",
    "раскомментир.*",
    "распознаться",
    "рассинхронизац.*",
    "регистро(не)?зависим.*",
    "резолвинг.*",
    "реинициализирует",
    "репортинг.*",
    "ресемплированием",
    "ресэмплировани.*",
    "роутинг.*",
    "само(заверен|подписан).*",
    "санитизаци.*",
    "сервлет.*",
    "сигмоид.*",
    "сигнализирован.*",
    "симлинк.*",
    "синглетон.*",
    "синглтон.*",
    "склонирован.*",
    "сконвертирова.*",
    "скоуп.*",
    "скринкаст",
    "скрипт.*",
    "снапшот.*",
    "сокетн.*",
    "соляризацион.*",
    "сопоставител.*",
    "спозиционирован.*",
    "среплиц.*",
    "среплицировать",
    "суб.*",
    "суперстраницы",
    "сэмпл.*",
    "таб.*",
    "тайпхинтинга",
    "токен.*",
    "транслитератор.*",
    "трейт.*",
    "три подшаблона",
    "универсальнее",
    "Упс",
    "файбер.*",
    "файлоподобн.*",
    "фасетирован.*",
    "финализирующ.*",
    "форк.*",
    "хак.*",
    "хинт.*",
    "чекбокс.*",
    "челлендж.*",
    "человеко(не)?читаем.*",
    "Числительный",
    "шард.*",
    "эквиваленция",
    "эмодзи",
    "эрмитовая",
    "языкозависим.*",
  ],
}
