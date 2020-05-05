// alert('Страница еще не доработана!')


let selectlisttw70 = document.getElementsByName('selectlisttw70')[0],
  area1 = document.querySelector('.area1'),
  area2 = document.querySelector('.area2'),
  area3 = document.querySelector('.area3'),
  area4 = document.querySelector('.area4'),
  area5 = document.querySelector('.area5'),
  area6 = document.querySelector('.area6'),
  area7 = document.querySelector('.area7'),
  area1inn = document.querySelectorAll('.area1inn'),
  area2inn = document.querySelectorAll('.area2inn'),
  area3inn = document.querySelectorAll('.area3inn'),
  area4inn = document.querySelectorAll('.area4inn'),
  area5inn = document.querySelectorAll('.area5inn'),
  area6inn = document.querySelectorAll('.area6inn'),
  area7inn = document.querySelectorAll('.area7inn'),
  areatotal = document.querySelector('.areatotal'),
  koeftotalinn = document.querySelectorAll('.koeftotalinn'),
  hainn = document.querySelectorAll('.hainn'),
  areatotalinn = document.querySelectorAll('.areatotalinn'),
  volumetank = document.querySelector('.volumetank'),
  calcinputtank70 = document.querySelector('.calcinput-tank70'),
  textinn = document.querySelector('.textinn'),
  koefSnowRemoveinn = document.querySelector('.koefSnowRemoveinn'),
  selectlisttw70inn = document.querySelector('.selectlisttw70inn'),
  daysVolumeSnow70inn = document.querySelector('.daysVolumeSnow70inn'),
  timePumpinn = document.querySelectorAll('.timePumpinn'),
  timePump = document.querySelector('.timePump'),
  totalQlosinn = document.querySelectorAll('.totalQlosinn'),
  selectCity = document.getElementsByName('myBrowser')[0],
  innHcp = document.querySelectorAll('.innHcp'),
  innCv = document.querySelectorAll('.innCv'),
  innCs = document.querySelectorAll('.innCs'),
  inn3Cv = document.querySelectorAll('.inn3Cv'),
  innF = document.querySelectorAll('.innF'),
  innHa = document.querySelectorAll('.innHa'),
  innCity = document.querySelector('.innCity'),
  filterKoef = document.querySelector('.filterKoef'),
  filterKoefinn = document.querySelectorAll('.filterKoefinn'),
  selectTankRow = document.getElementsByName('selectTankRow')[0],
  selectTankRowinn = document.querySelectorAll('.selectTankRowinn'),
  textVolumeinn = document.querySelector('.textVolumeinn'),
  Volumeinn = document.querySelector('.Volumeinn'),
  Volumeinntable5 = document.querySelector('.Volumeinntable5'),
  tankHeightinn = document.querySelector('.tankHeightinn'),
  mu = document.querySelector('.mu'),
  muinn = document.querySelector('.muinn'),
  areaTankinn = document.querySelectorAll('.areaTankinn'),
  checkTankHeight = document.getElementsByName('checkSelectTankRow')[0];
 

let vodgeo = [
  { "city": "Барнаул", "Нср": "27.7", "Cv": "0.49", "Cs": "2.3" },
  { "city": "Бийск", "Нср": "28.5", "Cv": "0.35", "Cs": "1.4" },
  { "city": "Горно-Алтайск", "Нср": "36.3", "Cv": "0.32", "Cs": "1.5" },
  { "city": "Улаган", "Нср": "21.4", "Cv": "0.32", "Cs": "1.6" },
  { "city": "Чемал", "Нср": "33.2", "Cv": "0.30", "Cs": "1.6" },
  { "city": "Благовещенск", "Нср": "49.4", "Cv": "0.44", "Cs": "2.2" },
  { "city": "Архангельск", "Нср": "29.7", "Cv": "0.45", "Cs": "1.5" },
  { "city": "Холмогоры", "Нср": "28.4", "Cv": "0.46", "Cs": "2.6" },
  { "city": "Астрахань", "Нср": "26.7", "Cv": "0.68", "Cs": "2.4" },
  { "city": "Бирск", "Нср": "28.1", "Cv": "0.44", "Cs": "2.2" },
  { "city": "Уфа", "Нср": "28.5", "Cv": "0.43", "Cs": "1.4" },
  { "city": "Белгород", "Нср": "35.4", "Cv": "0.46", "Cs": "2.2" },
  { "city": "Новый Оскол", "Нср": "31.7", "Cv": "0.34", "Cs": "0.5" },
  { "city": "Брянск", "Нср": "34.7", "Cv": "0.36", "Cs": "1.8" },
  { "city": "Улан-Удэ", "Нср": "31.1", "Cv": "0.53", "Cs": "2.2" },
  { "city": "Баргузин", "Нср": "29.5", "Cv": "0.47", "Cs": "2.3" },
  { "city": "Владимир", "Нср": "34.0", "Cv": "0.39", "Cs": "1.7" },
  { "city": "Гусь-Хрустальный", "Нср": "36.0", "Cv": "0.41", "Cs": "1.3" },
  { "city": "Ковров", "Нср": "34.5", "Cv": "0.41", "Cs": "1.3" },
  { "city": "Муром", "Нср": "32.2", "Cv": "0.38", "Cs": "1.3" },
  { "city": "Петушки", "Нср": "35.4", "Cv": "0.40", "Cs": "2.3" },
  { "city": "Суздаль", "Нср": "33.3", "Cv": "0.46", "Cs": "1.8" },
  { "city": "Волгоград", "Нср": "26.1", "Cv": "0.43", "Cs": "1.4" },
  { "city": "Великий Устюг", "Нср": "30.5", "Cv": "0.37", "Cs": "2.2" },
  { "city": "Вологда", "Нср": "31.3", "Cv": "0.40", "Cs": "2.5" },
  { "city": "Тотьма", "Нср": "23.3", "Cv": "0.28", "Cs": "2.0" },
  { "city": "Череповец", "Нср": "32.5", "Cv": "0.33", "Cs": "1.2" },
  { "city": "Кириллов", "Нср": "29.8", "Cv": "0.30", "Cs": "1.3" },
  { "city": "Каргополь", "Нср": "29.5", "Cv": "0.40", "Cs": "2.3" },
  { "city": "Воронеж", "Нср": "33.3", "Cv": "0.66", "Cs": "3.2" },
  { "city": "Калач", "Нср": "28.5", "Cv": "0.34", "Cs": "1.1" },
  { "city": "Лиски", "Нср": "34.3", "Cv": "0.61", "Cs": "2.5" },
  { "city": "Острогожск", "Нср": "36.2", "Cv": "0.46", "Cs": "1.8" },
  { "city": "Павловск", "Нср": "33.3", "Cv": "0.41", "Cs": "1.5" },
  { "city": "Россошь", "Нср": "30.8", "Cv": "0.41", "Cs": "1.7" },
  { "city": "Могоча", "Нср": "41.7", "Cv": "0.41", "Cs": "1.8" },
  { "city": "Нерчинск", "Нср": "31.8", "Cv": "0.36", "Cs": "1.5" },
  { "city": "Сретенск", "Нср": "35.2", "Cv": "0.41", "Cs": "1.8" },
  { "city": "Чита", "Нср": "32.8", "Cv": "0.36", "Cs": "2.1" },
  { "city": "Шилка", "Нср": "33.1", "Cv": "0.37", "Cs": "1.2" },
  { "city": "Иваново", "Нср": "31.9", "Cv": "0.44", "Cs": "3.0" },
  { "city": "Кинешма", "Нср": "31.1", "Cv": "0.36", "Cs": "1.4" },
  { "city": "Шуя", "Нср": "29.6", "Cv": "0.27", "Cs": "0.9" },
  { "city": "Юрьевец", "Нср": "31.3", "Cv": "0.50", "Cs": "3.0" },
  { "city": "Иркутск", "Нср": "38.4", "Cv": "0.41", "Cs": "1.5" },
  { "city": "Братск", "Нср": "32.0", "Cv": "0.61", "Cs": "3.2" },
  { "city": "Нальчик", "Нср": "49.2", "Cv": "0.38", "Cs": "1.2" },
  { "city": "Калуга", "Нср": "40.3", "Cv": "0.43", "Cs": "2.2" },
  { "city": "Малоярославец", "Нср": "34.3", "Cv": "0.31", "Cs": "0.8" },
  { "city": "Петропавловск-Камчатский", "Нср": "69.7", "Cv": "0.53", "Cs": "2.5" },
  { "city": "Усть-Камчатск", "Нср": "26.5", "Cv": "0.53", "Cs": "1.8" },
  { "city": "Калевала", "Нср": "24.6", "Cv": "0.34", "Cs": "1.7" },
  { "city": "Кемь", "Нср": "28.1", "Cv": "0.30", "Cs": "1.0" },
  { "city": "Кондопога", "Нср": "26.5", "Cv": "0.34", "Cs": "1.2" },
  { "city": "Петрозаводск", "Нср": "34.4", "Cv": "0.48", "Cs": "2.2" },
  { "city": "Киров", "Нср": "32.7", "Cv": "0.47", "Cs": "2.1" },
  { "city": "Сыктывкар", "Нср": "28.5", "Cv": "0.32", "Cs": "1.8" },
  { "city": "Ухта", "Нср": "28.8", "Cv": "0.43", "Cs": "1.4" },
  { "city": "Кострома", "Нср": "30.5", "Cv": "0.39", "Cs": "2.0" },
  { "city": "Шарья", "Нср": "35.7", "Cv": "0.59", "Cs": "2.9" },
  { "city": "Адлер", "Нср": "78.9", "Cv": "0.35", "Cs": "1.1" },
  { "city": "Белореченск", "Нср": "41.8", "Cv": "0.44", "Cs": "2.4" },
  { "city": "Красная поляна", "Нср": "67.0", "Cv": "0.30", "Cs": "1.5" },
  { "city": "Краснодар", "Нср": "41.1", "Cv": "0.50", "Cs": "2.2" },
  { "city": "Крымск", "Нср": "44.3", "Cv": "0.46", "Cs": "1.5" },
  { "city": "Кущёвская", "Нср": "38.4", "Cv": "0.46", "Cs": "2.0" },
  { "city": "Новороссийск", "Нср": "51.7", "Cv": "0.60", "Cs": "2.0" },
  { "city": "Приморско-Ахтарск", "Нср": "47.7", "Cv": "0.54", "Cs": "2.3" },
  { "city": "Тамань", "Нср": "39.7", "Cv": "0.54", "Cs": "2.0" },
  { "city": "Тихорецк", "Нср": "39.7", "Cv": "0.48", "Cs": "2.2" },
  { "city": "Туапсе", "Нср": "87.3", "Cv": "0.46", "Cs": "0.9" },
  { "city": "Сочи", "Нср": "78.3", "Cv": "0.38", "Cs": "1.6" },
  { "city": "Ачинск", "Нср": "30.0", "Cv": "0.58", "Cs": "2.5" },
  { "city": "Енисейск", "Нср": "24.8", "Cv": "0.36", "Cs": "1.6" },
  { "city": "Красноярск", "Нср": "34.0", "Cv": "0.54", "Cs": "2.4" },
  { "city": "Минусинск", "Нср": "24.6", "Cv": "0.47", "Cs": "2.3" },
  { "city": "Норильск", "Нср": "24.4", "Cv": "0.62", "Cs": "2.9" },
  { "city": "Алушта", "Нср": "36.1", "Cv": "0.59", "Cs": "2.0" },
  { "city": "Евпатория", "Нср": "32.8", "Cv": "0.53", "Cs": "1.8" },
  { "city": "Керчь", "Нср": "46.1", "Cv": "0.50", "Cs": "1.7" },
  { "city": "Севастополь", "Нср": "30.5", "Cv": "0.43", "Cs": "1.4" },
  { "city": "Симферополь", "Нср": "41.4", "Cv": "0.52", "Cs": "2.2" },
  { "city": "Судак", "Нср": "33.4", "Cv": "0.63", "Cs": "2.4" },
  { "city": "Феодосия", "Нср": "35.9", "Cv": "0.43", "Cs": "1.4" },
  { "city": "Ялта", "Нср": "43.4", "Cv": "0.67", "Cs": "3.4" },
  { "city": "Каргаполье", "Нср": "34.2", "Cv": "0.55", "Cs": "1.8" },
  { "city": "Курган", "Нср": "25.8", "Cv": "0.63", "Cs": "2.2" },
  { "city": "Шадринск", "Нср": "29.6", "Cv": "0.47", "Cs": "1.5" },
  { "city": "Курск", "Нср": "39.6", "Cv": "0.66", "Cs": "4.0" },
  { "city": "Волхов", "Нср": "29.9", "Cv": "0.40", "Cs": "1.3" },
  { "city": "Выборг", "Нср": "34.0", "Cv": "0.49", "Cs": "2.1" },
  { "city": "Приморск", "Нср": "31.7", "Cv": "0.35", "Cs": "2.1" },
  { "city": "Пушкин", "Нср": "30.3", "Cv": "0.33", "Cs": "2.2" },
  { "city": "Санкт-Петербург", "Нср": "30.4", "Cv": "0.43", "Cs": "1.7" },
  { "city": "Кирсанов", "Нср": "30.5", "Cv": "0.49", "Cs": "2.0" },
  { "city": "Елец", "Нср": "29.3", "Cv": "0.42", "Cs": "2.0" },
  { "city": "Липецк", "Нср": "32.3", "Cv": "0.47", "Cs": "2.6" },
  { "city": "Йошкар-Ола", "Нср": "30.2", "Cv": "0.43", "Cs": "4.0" },
  { "city": "Саранск", "Нср": "36.6", "Cv": "0.62", "Cs": "3.6" },
  { "city": "Волоколамск", "Нср": "35.8", "Cv": "0.50", "Cs": "2.9" },
  { "city": "Дмитров", "Нср": "36.8", "Cv": "0.31", "Cs": "1.1" },
  { "city": "Кашира", "Нср": "31.6", "Cv": "0.40", "Cs": "1.4" },
  { "city": "Клин", "Нср": "36.7", "Cv": "0.42", "Cs": "2.1" },
  { "city": "Коломна", "Нср": "33.6", "Cv": "0.39", "Cs": "1.3" },
  { "city": "Михнево", "Нср": "34.3", "Cv": "0.40", "Cs": "2.1" },
  { "city": "Москва", "Нср": "33.2", "Cv": "0.38", "Cs": "2.3" },
  { "city": "Нарофоминск", "Нср": "35.9", "Cv": "0.38", "Cs": "1.2" },
  { "city": "Павловский Посад", "Нср": "33.5", "Cv": "0.58", "Cs": "2.0" },
  { "city": "Починки", "Нср": "32.0", "Cv": "0.52", "Cs": "2.6" },
  { "city": "Сергиев Посад", "Нср": "35.7", "Cv": "0.33", "Cs": "1.0" },
  { "city": "Серпухов", "Нср": "33.2", "Cv": "0.42", "Cs": "2.4" },
  { "city": "Апатиты", "Нср": "23.0", "Cv": "0.38", "Cs": "1.2" },
  { "city": "Кандалакша", "Нср": "23.7", "Cv": "0.39", "Cs": "1.3" },
  { "city": "Мончегорск", "Нср": "25.6", "Cv": "0.37", "Cs": "1.2" },
  { "city": "Мурманск", "Нср": "24.1", "Cv": "0.35", "Cs": "0.9" },
  { "city": "Хибины", "Нср": "27.2", "Cv": "0.33", "Cs": "0.9" },
  { "city": "Ардатов", "Нср": "28.7", "Cv": "0.35", "Cs": "1.2" },
  { "city": "Арзамас", "Нср": "29.6", "Cv": "0.52", "Cs": "3.6" },
  { "city": "Кулебаки", "Нср": "30.3", "Cv": "0.39", "Cs": "1.9" },
  { "city": "Лукоянов", "Нср": "35.66", "Cv": "0.69", "Cs": "5.3" },
  { "city": "Нижний Новгород", "Нср": "30.3", "Cv": "0.40", "Cs": "1.6" },
  { "city": "Новгород Великий", "Нср": "32.8", "Cv": "0.41", "Cs": "1.2" },
  { "city": "Новосибирск", "Нср": "29.3", "Cv": "0.53", "Cs": "3.2" },
  { "city": "Омск", "Нср": "28.3", "Cv": "0.58", "Cs": "2.4" },
  { "city": "Оренбург", "Нср": "25.1", "Cv": "0.44", "Cs": "1.4" },
  { "city": "Орёл", "Нср": "35.9", "Cv": "0.59", "Cs": "3.0" },
  { "city": "Пенза", "Нср": "36.2", "Cv": "0.51", "Cs": "2.5" },
  { "city": "Березники", "Нср": "31.4", "Cv": "0.39", "Cs": "1.3" },
  { "city": "Пермь", "Нср": "30.6", "Cv": "0.45", "Cs": "2.4" },
  { "city": "Соликамск", "Нср": "29.4", "Cv": "0.43", "Cs": "1.4" },
  { "city": "Владивосток", "Нср": "90.3", "Cv": "0.47", "Cs": "1.6" },
  { "city": "Великие Луки", "Нср": "32.9", "Cv": "0.38", "Cs": "1.2" },
  { "city": "Псков", "Нср": "36.8", "Cv": "0.37", "Cs": "0.8" },
  { "city": "Ейск", "Нср": "36.5", "Cv": "0.43", "Cs": "1.4" },
  { "city": "Ростов-на-Дону", "Нср": "41.0", "Cv": "0.49", "Cs": "1.5" },
  { "city": "Елатьма", "Нср": "30.5", "Cv": "0.39", "Cs": "1.6" },
  { "city": "Касимов", "Нср": "32.8", "Cv": "0.49", "Cs": "2.4" },
  { "city": "Рязань", "Нср": "32.9", "Cv": "0.46", "Cs": "1.5" },
  { "city": "Ряжск", "Нср": "30.0", "Cv": "0.36", "Cs": "1.1" },
  { "city": "Тума", "Нср": "34.0", "Cv": "0.46", "Cs": "1.7" },
  { "city": "Самара", "Нср": "28.1", "Cv": "0.49", "Cs": "2.1" },
  { "city": "Балашов", "Нср": "28.7", "Cv": "0.39", "Cs": "1.2" },
  { "city": "Саратов", "Нср": "30.2", "Cv": "0.44", "Cs": "1.5" },
  { "city": "Южно-Сахалинск", "Нср": "50.6", "Cv": "0.40", "Cs": "1.3" },
  { "city": "Александровск-Сахалинский", "Нср": "39.2", "Cv": "0.43", "Cs": "1.4" },
  { "city": "Екатеринбург", "Нср": "31.2", "Cv": "0.37", "Cs": "1.2" },
  { "city": "Красноуфимск", "Нср": "31.0", "Cv": "0.39", "Cs": "1.0" },
  { "city": "Владикавказ", "Нср": "56.6", "Cv": "0.38", "Cs": "1.6" },
  { "city": "Вязьма", "Нср": "33.5", "Cv": "0.36", "Cs": "1.1" },
  { "city": "Ельня", "Нср": "36.7", "Cv": "0.44", "Cs": "1.8" },
  { "city": "Рославль", "Нср": "35.6", "Cv": "0.42", "Cs": "2.0" },
  { "city": "Смоленск", "Нср": "35.1", "Cv": "0.42", "Cs": "1.9" },
  { "city": "Ессентуки", "Нср": "39.6", "Cv": "0.37", "Cs": "1.2" },
  { "city": "Железноводск", "Нср": "47.9", "Cv": "0.44", "Cs": "1.4" },
  { "city": "Кисловодск", "Нср": "50.8", "Cv": "0.25", "Cs": "1.7" },
  { "city": "Ново-Пятигорск", "Нср": "43.0", "Cv": "0.51", "Cs": "2.9" },
  { "city": "Пятигорск", "Нср": "43.1", "Cv": "0.42", "Cs": "1.3" },
  { "city": "Ставрополь", "Нср": "40.6", "Cv": "0.38", "Cs": "1.9" },
  { "city": "Моршанск", "Нср": "30.2", "Cv": "0.41", "Cs": "1.8" },
  { "city": "Тамбов", "Нср": "32.8", "Cv": "0.33", "Cs": "1.1" },
  { "city": "Бугульма", "Нср": "31.6", "Cv": "0.39", "Cs": "1.6" },
  { "city": "Елабуга", "Нср": "30.4", "Cv": "0.42", "Cs": "1.4" },
  { "city": "Казань", "Нср": "30.7", "Cv": "0.54", "Cs": "3.6" },
  { "city": "Мамадыш", "Нср": "28.7", "Cv": "0.50", "Cs": "2.6" },
  { "city": "Ржев", "Нср": "34.8", "Cv": "0.40", "Cs": "1.5" },
  { "city": "Осташков", "Нср": "32.2", "Cv": "0.45", "Cs": "1.9" },
  { "city": "Тверь", "Нср": "32.1", "Cv": "0.37", "Cs": "1.6" },
  { "city": "Торжок", "Нср": "29.6", "Cv": "0.37", "Cs": "1.7" },
  { "city": "Тургиново", "Нср": "30.6", "Cv": "0.40", "Cs": "1.8" },
  { "city": "Томск", "Нср": "31.3", "Cv": "0.48", "Cs": "2.4" },
  { "city": "Ефремов", "Нср": "31.4", "Cv": "0.50", "Cs": "3.2" },
  { "city": "Тула", "Нср": "31.2", "Cv": "0.37", "Cs": "1.4" },
  { "city": "Викулово", "Нср": "35.0", "Cv": "0.43", "Cs": "1.5" },
  { "city": "Салехард", "Нср": "27.3", "Cv": "0.53", "Cs": "1.9" },
  { "city": "Сургут", "Нср": "29.7", "Cv": "0.35", "Cs": "1.1" },
  { "city": "Тобольск", "Нср": "32.5", "Cv": "0.38", "Cs": "0.5" },
  { "city": "Тюмень", "Нср": "33.8", "Cv": "0.51", "Cs": "1.7" },
  { "city": "Болонь", "Нср": "63.2", "Cv": "0.69", "Cs": "4.4" },
  { "city": "Комсомольск-на-Амуре", "Нср": "46.3", "Cv": "0.42", "Cs": "1.2" },
  { "city": "Николаевск-на-Амуре", "Нср": "39.8", "Cv": "0.47", "Cs": "2.4" },
  { "city": "Советская Гавань", "Нср": "64.9", "Cv": "0.43", "Cs": "2.2" },
  { "city": "Троицкое", "Нср": "47.0", "Cv": "0.35", "Cs": "1.3" },
  { "city": "Хабаровск", "Нср": "47.3", "Cv": "0.46", "Cs": "3.4" },
  { "city": "Елабуга", "Нср": "49.1", "Cv": "0.35", "Cs": "1.3" },
  { "city": "Магнитогорск", "Нср": "31.1", "Cv": "0.76", "Cs": "6.0" },
  { "city": "Троицк", "Нср": "30.7", "Cv": "0.59", "Cs": "6.0" },
  { "city": "Челябинск", "Нср": "31.1", "Cv": "0.37", "Cs": "2.6" },
  { "city": "Чебоксары", "Нср": "31.3", "Cv": "0.55", "Cs": "2.2" },
  { "city": "Анадырь", "Нср": "18.9", "Cv": "0.48", "Cs": "1.6" },
  { "city": "Верхоянск", "Нср": "16.5", "Cv": "0.53", "Cs": "2.0" },
  { "city": "Якутск", "Нср": "21.7", "Cv": "0.50", "Cs": "1.6" },
  { "city": "Ростов Великий", "Нср": "34.7", "Cv": "0.39", "Cs": "1.6" },
  { "city": "Рыбинск", "Нср": "34.8", "Cv": "0.38", "Cs": "1.4" },
  { "city": "Углич", "Нср": "33.9", "Cv": "0.32", "Cs": "1.2" },
  { "city": "Ярославль", "Нср": "33.6", "Cv": "0.38", "Cs": "1.5" }
];

let tableCsF = [{ "Cs": 0.4, "F": -0.4 },
{ "Cs": 0.6, "F": -0.42 },
{ "Cs": 0.8, "F": -0.43 },
{ "Cs": 1, "F": -0.45 },
{ "Cs": 1.2, "F": -0.46 },
{ "Cs": 1.4, "F": -0.47 },
{ "Cs": 1.6, "F": -0.47 },
{ "Cs": 1.8, "F": -0.48 },
{ "Cs": 2, "F": -0.48 },
{ "Cs": 2.2, "F": -0.48 },
{ "Cs": 2.4, "F": -0.48 },
{ "Cs": 2.6, "F": -0.48 },
{ "Cs": 2.8, "F": -0.48 },
{ "Cs": 3, "F": -0.48 },
{ "Cs": 3.2, "F": -0.48 },
{ "Cs": 3.4, "F": -0.47 },
{ "Cs": 3.6, "F": -0.47 },
{ "Cs": 3.8, "F": -0.47 },
{ "Cs": 4, "F": -0.47 },
{ "Cs": 4.5, "F": -0.46 },
{ "Cs": 5, "F": -0.45 },
{ "Cs": 6.001, "F": -0.44 }
];

let calcVolume = function () {
  let xxx = function (arr) {
    let x = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].city == selectCity.value) {
        x.push(arr[i].Нср);
        x.push(arr[i].Cv);
        x.push(arr[i].Cs);

      }
    }
    return x;
  };

  for (let i = 0; i < innHcp.length; i++) {
    innHcp[i].textContent = xxx(vodgeo)[0];
  };
  for (let i = 0; i < innCv.length; i++) {
    innCv[i].textContent = xxx(vodgeo)[1];
  };
  for (let i = 0; i < innCs.length; i++) {
    innCs[i].textContent = xxx(vodgeo)[2];
  };

  let findCs = function (arr) {
    let CsLeft,
      CsRight,
      z = [],
      number = xxx(vodgeo)[2],
      current;
    for (var k = 0; k < arr.length; k++) {
      current = arr[k].Cs;
      if (current <= number && (typeof CsLeft === 'undefined' || CsLeft < current)) {
        CsLeft = current;
        z[0] = CsLeft;
      } else if (current >= number && (typeof CsRight === 'undefined' || CsRight > current)) {
        CsRight = current;
        z[1] = CsRight;
      }
    };
    return z;
  };

  let findF = function (arr) {
    let y = [];
    for (let i = 0; i < arr.length; i++) {
      if (findCs(tableCsF)[0] == arr[i].Cs && findCs(tableCsF)[1] == arr[i + 1].Cs) {
        y[0] = arr[i].F;
        y[1] = arr[i + 1].F;
      };
    }
    return y;
  };

  let Ha;
  let Fint;
  let Cv3;
  Cv3 = 3 * xxx(vodgeo)[1];
  Fint = findF(tableCsF)[0] - (findF(tableCsF)[0] - findF(tableCsF)[1]) * (xxx(vodgeo)[2] - findCs(tableCsF)[0]) / (findCs(tableCsF)[1] - findCs(tableCsF)[0])
  Ha = xxx(vodgeo)[0] * (1 + xxx(vodgeo)[1] * Fint);

  for (let i = 0; i < inn3Cv.length; i++) {
    inn3Cv[i].textContent = Cv3.toFixed(2);
  };

  for (let i = 0; i < innF.length; i++) {
    innF[i].textContent = Fint.toFixed(3);
  };
  for (let i = 0; i < innHa.length; i++) {
    innHa[i].textContent = Ha.toFixed(2);
  };
  innCity.textContent = selectCity.value;

  let areaTotalCulc = Number(area1.value) + Number(area2.value) + Number(area3.value) + Number(area4.value) + Number(area5.value) + Number(area6.value) + Number(area7.value);
  let koefTotalCulc = ((area1.value * 0.95) + (area2.value * 0.6) + (area3.value * 0.45) + (area4.value * 0.4) + (area5.value * 0.3) + (area6.value * 0.2) + (area7.value * 0.1)) / areaTotalCulc;
  let volumeTankCulc = 10 * Ha * areaTotalCulc * koefTotalCulc;
  let koefSnowRemove = 1 - (Number(area1.value) + Number(area2.value) + Number(area3.value) + Number(area4.value) + Number(area5.value)) / areaTotalCulc;
  let daysVolumeSnow = 10 * 0.5 * 0.8 * areaTotalCulc * koefSnowRemove * selectlisttw70.value;

  for (let i = 0; i < area1inn.length; i++) {
    area1inn[i].textContent = Number(area1.value)
  };
  for (let i = 0; i < area2inn.length; i++) {
    area2inn[i].textContent = Number(area2.value)
  };
  for (let i = 0; i < area3inn.length; i++) {
    area3inn[i].textContent = Number(area3.value)
  };
  for (let i = 0; i < area4inn.length; i++) {
    area4inn[i].textContent = Number(area4.value)
  };
  for (let i = 0; i < area5inn.length; i++) {
    area5inn[i].textContent = Number(area5.value)
  };
  for (let i = 0; i < area6inn.length; i++) {
    area6inn[i].textContent = Number(area6.value)
  };
  for (let i = 0; i < area7inn.length; i++) {
    area7inn[i].textContent = Number(area7.value)
  };
  for (let i = 0; i < koeftotalinn.length; i++) {
    koeftotalinn[i].textContent = koefTotalCulc.toFixed(2);
  };
  for (let i = 0; i < areatotalinn.length; i++) {
    areatotalinn[i].textContent = areaTotalCulc.toFixed(2);
  };
  for (let i = 0; i < filterKoefinn.length; i++) {
    filterKoefinn[i].textContent = filterKoef.value;
  };


  volumetank.textContent = volumeTankCulc.toFixed(0);
  koefSnowRemoveinn.textContent = koefSnowRemove.toFixed(2);
  selectlisttw70inn.textContent = selectlisttw70.value;
  daysVolumeSnow70inn.textContent = daysVolumeSnow.toFixed(0);

  for (let i = 0; i < totalQlosinn.length; i++) {
    totalQlosinn[i].textContent = totalQlos.toFixed(2);
  };

  let currentVolumeTank;
  if (volumeTankCulc > daysVolumeSnow) {
    textVolumeinn.textContent = 'Согласно расчету Wд больше чем Wт, следовательно, принимаем большую величину'
    Volumeinn.textContent = volumeTankCulc.toFixed(0);
    Volumeinntable5.textContent = volumeTankCulc.toFixed(0);
    currentVolumeTank = volumeTankCulc
  }
  else {
    textVolumeinn.textContent = 'Согласно расчету Wт больше чем Wд, следовательно, принимаем большую величину'
    Volumeinn.textContent = daysVolumeSnow.toFixed(0);
    Volumeinntable5.textContent = daysVolumeSnow.toFixed(0);
    currentVolumeTank = daysVolumeSnow;
  }

  for (let i = 0; i < selectTankRowinn.length; i++) {
    selectTankRowinn[i].textContent = selectTankRow.value;
  };


  if (Number(selectTankRow.value) === 0.61) {
    tankHeightinn.textContent = 'один уровень'
  }
  else if (Number(selectTankRow.value) === 1.22) {
    tankHeightinn.textContent = 'два уровня';
  }
  else if (Number(selectTankRow.value) === 1.83) {
    tankHeightinn.textContent = 'три уровня';
  }
  else if (Number(selectTankRow.value) === 2.44) {
    tankHeightinn.textContent = 'четыре уровня';
  }
  else if (Number(selectTankRow.value) === 3.05) {
    tankHeightinn.textContent = 'пять уровней';
  }
  else {
    tankHeightinn.textContent = 'НЕПРАВИЛЬНО ВВЕДЕНЫ ДАННЫЕ! РЕЗЕРВУАРА SB ТАКОЙ ВЫСОТЫ НЕ БЫВАЕТ!';
  }

  muinn.textContent = mu.value;

  let areaTank = currentVolumeTank * ((Math.sqrt(1 + ((4 * Number(mu.value) * Number(selectTankRow.value)) / Number(filterKoef.value)))) - 1) / (2 * Number(mu.value) * Number(selectTankRow.value));

  for (let i = 0; i < areaTankinn.length; i++) {
    areaTankinn[i].textContent = areaTank.toFixed(0);
  };

  if (area1.value < 0) {
    area1.value = '';
  }

  if (area2.value < 0) {
    area2.value = '';
  }

  if (area3.value < 0) {
    area3.value = '';
  }

  if (area4.value < 0) {
    area4.value = '';
  }

  if (area5.value < 0) {
    area5.value = '';
  }

  if (area6.value < 0) {
    area6.value = '';
  }

  if (area7.value < 0) {
    area7.value = '';
  }

  if (selectlisttw70.value <= 0) {
    selectlisttw70.value = '';
  }

  if (procent.value <= 0) {
    procent.value = '';
  }

  if (mu.value <= 0) {
    mu.value = '';
  }

  if (filterKoef.value <= 0) {
    filterKoef.value = '';
  }

  else { }

  let check1 = function () {
    let check1Col2Row1to6inn = document.querySelectorAll('.check1Col2Row1to6inn');
    let runoffinn3Col = document.querySelectorAll('.runoffinn3Col');
    let accumulation4ColRow1to6inn = document.querySelectorAll('.accumulation4ColRow1to6inn');
    let accumulation4ColRow7to24inn = document.querySelectorAll('.accumulation4ColRow7to24inn');
    let accumulationCol5Row1inn = document.querySelector('.accumulationCol5Row1inn');
    let accumulationCol5Row2inn = document.querySelector('.accumulationCol5Row2inn');
    let accumulationCol5Row3inn = document.querySelector('.accumulationCol5Row3inn');
    let accumulationCol5Row4inn = document.querySelector('.accumulationCol5Row4inn');
    let accumulationCol5Row5inn = document.querySelector('.accumulationCol5Row5inn');
    let accumulationCol5Row6inn = document.querySelectorAll('.accumulationCol5Row6inn');
    let accumulationCol5Row7inn = document.querySelector('.accumulationCol5Row7inn');
    let accumulationCol5Row8inn = document.querySelector('.accumulationCol5Row8inn');
    let accumulationCol5Row9inn = document.querySelector('.accumulationCol5Row9inn');
    let accumulationCol5Row10inn = document.querySelector('.accumulationCol5Row10inn');
    let accumulationCol5Row11inn = document.querySelector('.accumulationCol5Row11inn');
    let accumulationCol5Row12inn = document.querySelector('.accumulationCol5Row12inn');
    let accumulationCol5Row13inn = document.querySelector('.accumulationCol5Row13inn');
    let accumulationCol5Row14inn = document.querySelector('.accumulationCol5Row14inn');
    let accumulationCol5Row15inn = document.querySelector('.accumulationCol5Row15inn');
    let accumulationCol5Row16inn = document.querySelector('.accumulationCol5Row16inn');
    let accumulationCol5Row17inn = document.querySelector('.accumulationCol5Row17inn');
    let accumulationCol5Row18inn = document.querySelector('.accumulationCol5Row18inn');
    let accumulationCol5Row19inn = document.querySelector('.accumulationCol5Row19inn');
    let accumulationCol5Row20inn = document.querySelector('.accumulationCol5Row20inn');
    let accumulationCol5Row21inn = document.querySelector('.accumulationCol5Row21inn');
    let accumulationCol5Row22inn = document.querySelector('.accumulationCol5Row22inn');
    let accumulationCol5Row23inn = document.querySelector('.accumulationCol5Row23inn');
    let accumulationCol5Row24inn = document.querySelector('.accumulationCol5Row24inn');
    let reserveinn = document.querySelectorAll('.reserveinn');
    let requireHeightTankinn = document.querySelector('.requireHeightTankinn');
    let procent = document.getElementsByName('procent')[0];
    let procentinn = document.querySelectorAll('.procentinn');
    
    let sixHoursRain = currentVolumeTank / 6;
    let runoff = areaTank * Number(filterKoef.value) / 24;
    let accumulation4ColRow1to6 = sixHoursRain - runoff;
    let accumulation4ColRow7to24 = 0 - runoff;

    let accumulationCol5Row1 = accumulation4ColRow1to6;
    accumulationCol5Row1inn.textContent = accumulationCol5Row1.toFixed(2);

    let accumulationCol5Row2 = accumulation4ColRow1to6 + accumulationCol5Row1;
    accumulationCol5Row2inn.textContent = accumulationCol5Row2.toFixed(2);

    let accumulationCol5Row3 = accumulation4ColRow1to6 + accumulationCol5Row2;
    accumulationCol5Row3inn.textContent = accumulationCol5Row3.toFixed(2);

    let accumulationCol5Row4 = accumulation4ColRow1to6 + accumulationCol5Row3;
    accumulationCol5Row4inn.textContent = accumulationCol5Row4.toFixed(2);

    let accumulationCol5Row5 = accumulation4ColRow1to6 + accumulationCol5Row4;
    accumulationCol5Row5inn.textContent = accumulationCol5Row5.toFixed(2);

    let accumulationCol5Row6 = accumulation4ColRow1to6 + accumulationCol5Row5;
    for (let i = 0; i < accumulationCol5Row6inn.length; i++) {
      accumulationCol5Row6inn[i].textContent = accumulationCol5Row6.toFixed(2);
    };

    let accumulationCol5Row7 = accumulation4ColRow7to24 + accumulationCol5Row6;
    accumulationCol5Row7inn.textContent = accumulationCol5Row7.toFixed(2);

    let accumulationCol5Row8 = accumulation4ColRow7to24 + accumulationCol5Row7;
    accumulationCol5Row8inn.textContent = accumulationCol5Row8.toFixed(2);

    let accumulationCol5Row9 = accumulation4ColRow7to24 + accumulationCol5Row8;
    accumulationCol5Row9inn.textContent = accumulationCol5Row9.toFixed(2);

    let accumulationCol5Row10 = accumulation4ColRow7to24 + accumulationCol5Row9;
    accumulationCol5Row10inn.textContent = accumulationCol5Row10.toFixed(2);

    let accumulationCol5Row11 = accumulation4ColRow7to24 + accumulationCol5Row10;
    accumulationCol5Row11inn.textContent = accumulationCol5Row11.toFixed(2);

    let accumulationCol5Row12 = accumulation4ColRow7to24 + accumulationCol5Row11;
    accumulationCol5Row12inn.textContent = accumulationCol5Row12.toFixed(2);

    let accumulationCol5Row13 = accumulation4ColRow7to24 + accumulationCol5Row12;
    accumulationCol5Row13inn.textContent = accumulationCol5Row13.toFixed(2);

    let accumulationCol5Row14 = accumulation4ColRow7to24 + accumulationCol5Row13;
    accumulationCol5Row14inn.textContent = accumulationCol5Row14.toFixed(2);

    let accumulationCol5Row15 = accumulation4ColRow7to24 + accumulationCol5Row14;
    accumulationCol5Row15inn.textContent = accumulationCol5Row15.toFixed(2);

    let accumulationCol5Row16 = accumulation4ColRow7to24 + accumulationCol5Row15;
    accumulationCol5Row16inn.textContent = accumulationCol5Row16.toFixed(2);

    let accumulationCol5Row17 = accumulation4ColRow7to24 + accumulationCol5Row16;
    accumulationCol5Row17inn.textContent = accumulationCol5Row17.toFixed(2);

    let accumulationCol5Row18 = accumulation4ColRow7to24 + accumulationCol5Row17;
    accumulationCol5Row18inn.textContent = accumulationCol5Row18.toFixed(2);

    let accumulationCol5Row19 = accumulation4ColRow7to24 + accumulationCol5Row18;
    accumulationCol5Row19inn.textContent = accumulationCol5Row19.toFixed(2);

    let accumulationCol5Row20 = accumulation4ColRow7to24 + accumulationCol5Row19;
    accumulationCol5Row20inn.textContent = accumulationCol5Row20.toFixed(2);

    let accumulationCol5Row21 = accumulation4ColRow7to24 + accumulationCol5Row20;
    accumulationCol5Row21inn.textContent = accumulationCol5Row21.toFixed(2);

    let accumulationCol5Row22 = accumulation4ColRow7to24 + accumulationCol5Row21;
    accumulationCol5Row22inn.textContent = accumulationCol5Row22.toFixed(2);

    let accumulationCol5Row23 = accumulation4ColRow7to24 + accumulationCol5Row22;
    accumulationCol5Row23inn.textContent = accumulationCol5Row23.toFixed(2);

    let accumulationCol5Row24 = accumulation4ColRow7to24 + accumulationCol5Row23;
    accumulationCol5Row24inn.textContent = accumulationCol5Row24.toFixed(2);

    let reserve = accumulationCol5Row6 * (procent.value/100 + 1);
    for (let i = 0; i < reserveinn.length; i++) {
      reserveinn[i].textContent = reserve.toFixed(2);
    };

    for (let i = 0; i < check1Col2Row1to6inn.length; i++) {
      check1Col2Row1to6inn[i].textContent = sixHoursRain.toFixed(2);
    };
    for (let i = 0; i < runoffinn3Col.length; i++) {
      runoffinn3Col[i].textContent = runoff.toFixed(2);
    };
    for (let i = 0; i < accumulation4ColRow1to6inn.length; i++) {
      accumulation4ColRow1to6inn[i].textContent = accumulation4ColRow1to6.toFixed(2);
    };
    for (let i = 0; i < accumulation4ColRow7to24inn.length; i++) {
      accumulation4ColRow7to24inn[i].textContent = accumulation4ColRow7to24.toFixed(2);
    };

    let requireHeightTank = reserve / areaTank;
    requireHeightTankinn.textContent = requireHeightTank.toFixed(2);

    let checkTankHeightinn = document.querySelectorAll('.checkTankHeightinn');
    let checkTankAreainn = document.querySelectorAll('.checkTankAreainn');


    for (let i = 0; i < checkTankHeightinn.length; i++) {
      checkTankHeightinn[i].textContent = Number(checkTankHeight.value);
    };

    let checkTankArea = reserve / Number(checkTankHeight.value);

    for (let i = 0; i < checkTankAreainn.length; i++) {
      checkTankAreainn[i].textContent = checkTankArea.toFixed(2);
    };

    for (let i = 0; i < procentinn.length; i++) {
      procentinn[i].textContent = procent.value;
    };


    let check2Col2Row1to6inn = document.querySelectorAll('.check2Col2Row1to6inn');
    let check2runoffinn3Col = document.querySelectorAll('.check2runoffinn3Col');
    let check2accumulation4ColRow1to6inn = document.querySelectorAll('.check2accumulation4ColRow1to6inn');
    let check2accumulation4ColRow7to24inn = document.querySelectorAll('.check2accumulation4ColRow7to24inn');
    let check2accumulationCol5Row1inn = document.querySelector('.check2accumulationCol5Row1inn');
    let check2accumulationCol5Row2inn = document.querySelector('.check2accumulationCol5Row2inn');
    let check2accumulationCol5Row3inn = document.querySelector('.check2accumulationCol5Row3inn');
    let check2accumulationCol5Row4inn = document.querySelector('.check2accumulationCol5Row4inn');
    let check2accumulationCol5Row5inn = document.querySelector('.check2accumulationCol5Row5inn');
    let check2accumulationCol5Row6inn = document.querySelectorAll('.check2accumulationCol5Row6inn');
    let check2accumulationCol5Row7inn = document.querySelector('.check2accumulationCol5Row7inn');
    let check2accumulationCol5Row8inn = document.querySelector('.check2accumulationCol5Row8inn');
    let check2accumulationCol5Row9inn = document.querySelector('.check2accumulationCol5Row9inn');
    let check2accumulationCol5Row10inn = document.querySelector('.check2accumulationCol5Row10inn');
    let check2accumulationCol5Row11inn = document.querySelector('.check2accumulationCol5Row11inn');
    let check2accumulationCol5Row12inn = document.querySelector('.check2accumulationCol5Row12inn');
    let check2accumulationCol5Row13inn = document.querySelector('.check2accumulationCol5Row13inn');
    let check2accumulationCol5Row14inn = document.querySelector('.check2accumulationCol5Row14inn');
    let check2accumulationCol5Row15inn = document.querySelector('.check2accumulationCol5Row15inn');
    let check2accumulationCol5Row16inn = document.querySelector('.check2accumulationCol5Row16inn');
    let check2accumulationCol5Row17inn = document.querySelector('.check2accumulationCol5Row17inn');
    let check2accumulationCol5Row18inn = document.querySelector('.check2accumulationCol5Row18inn');
    let check2accumulationCol5Row19inn = document.querySelector('.check2accumulationCol5Row19inn');
    let check2accumulationCol5Row20inn = document.querySelector('.check2accumulationCol5Row20inn');
    let check2accumulationCol5Row21inn = document.querySelector('.check2accumulationCol5Row21inn');
    let check2accumulationCol5Row22inn = document.querySelector('.check2accumulationCol5Row22inn');
    let check2accumulationCol5Row23inn = document.querySelector('.check2accumulationCol5Row23inn');
    let check2accumulationCol5Row24inn = document.querySelector('.check2accumulationCol5Row24inn');
    let check2reserveinn = document.querySelectorAll('.check2reserveinn');
    
    let check2sixHoursRain = currentVolumeTank / 6;
    let check2runoff = checkTankArea * Number(filterKoef.value) / 24;
    let check2accumulation4ColRow1to6 = check2sixHoursRain - check2runoff;
    let check2accumulation4ColRow7to24 = 0 - check2runoff;

    let check2accumulationCol5Row1 = check2accumulation4ColRow1to6;
    check2accumulationCol5Row1inn.textContent = check2accumulationCol5Row1.toFixed(2);

    let check2accumulationCol5Row2 = check2accumulation4ColRow1to6 + check2accumulationCol5Row1;
    check2accumulationCol5Row2inn.textContent = check2accumulationCol5Row2.toFixed(2);

    let check2accumulationCol5Row3 = check2accumulation4ColRow1to6 + check2accumulationCol5Row2;
    check2accumulationCol5Row3inn.textContent = check2accumulationCol5Row3.toFixed(2);

    let check2accumulationCol5Row4 = check2accumulation4ColRow1to6 + check2accumulationCol5Row3;
    check2accumulationCol5Row4inn.textContent = check2accumulationCol5Row4.toFixed(2);

    let check2accumulationCol5Row5 = check2accumulation4ColRow1to6 + check2accumulationCol5Row4;
    check2accumulationCol5Row5inn.textContent = check2accumulationCol5Row5.toFixed(2);

    let check2accumulationCol5Row6 = check2accumulation4ColRow1to6 + check2accumulationCol5Row5;
    for (let i = 0; i < check2accumulationCol5Row6inn.length; i++) {
      check2accumulationCol5Row6inn[i].textContent = check2accumulationCol5Row6.toFixed(2);
    };

    let check2accumulationCol5Row7 = check2accumulation4ColRow7to24 + check2accumulationCol5Row6;
    check2accumulationCol5Row7inn.textContent = check2accumulationCol5Row7.toFixed(2);

    let check2accumulationCol5Row8 = check2accumulation4ColRow7to24 + check2accumulationCol5Row7;
    check2accumulationCol5Row8inn.textContent = check2accumulationCol5Row8.toFixed(2);

    let check2accumulationCol5Row9 = check2accumulation4ColRow7to24 + check2accumulationCol5Row8;
    check2accumulationCol5Row9inn.textContent = check2accumulationCol5Row9.toFixed(2);

    let check2accumulationCol5Row10 = check2accumulation4ColRow7to24 + check2accumulationCol5Row9;
    check2accumulationCol5Row10inn.textContent = check2accumulationCol5Row10.toFixed(2);

    let check2accumulationCol5Row11 = check2accumulation4ColRow7to24 + check2accumulationCol5Row10;
    check2accumulationCol5Row11inn.textContent = check2accumulationCol5Row11.toFixed(2);

    let check2accumulationCol5Row12 = check2accumulation4ColRow7to24 + check2accumulationCol5Row11;
    check2accumulationCol5Row12inn.textContent = check2accumulationCol5Row12.toFixed(2);

    let check2accumulationCol5Row13 = check2accumulation4ColRow7to24 + check2accumulationCol5Row12;
    check2accumulationCol5Row13inn.textContent = check2accumulationCol5Row13.toFixed(2);

    let check2accumulationCol5Row14 = check2accumulation4ColRow7to24 + check2accumulationCol5Row13;
    check2accumulationCol5Row14inn.textContent = check2accumulationCol5Row14.toFixed(2);

    let check2accumulationCol5Row15 = check2accumulation4ColRow7to24 + check2accumulationCol5Row14;
    check2accumulationCol5Row15inn.textContent = check2accumulationCol5Row15.toFixed(2);

    let check2accumulationCol5Row16 = check2accumulation4ColRow7to24 + check2accumulationCol5Row15;
    check2accumulationCol5Row16inn.textContent = check2accumulationCol5Row16.toFixed(2);

    let check2accumulationCol5Row17 = check2accumulation4ColRow7to24 + check2accumulationCol5Row16;
    check2accumulationCol5Row17inn.textContent = check2accumulationCol5Row17.toFixed(2);

    let check2accumulationCol5Row18 = check2accumulation4ColRow7to24 + check2accumulationCol5Row17;
    check2accumulationCol5Row18inn.textContent = check2accumulationCol5Row18.toFixed(2);

    let check2accumulationCol5Row19 = check2accumulation4ColRow7to24 + check2accumulationCol5Row18;
    check2accumulationCol5Row19inn.textContent = check2accumulationCol5Row19.toFixed(2);

    let check2accumulationCol5Row20 = check2accumulation4ColRow7to24 + check2accumulationCol5Row19;
    check2accumulationCol5Row20inn.textContent = check2accumulationCol5Row20.toFixed(2);

    let check2accumulationCol5Row21 = check2accumulation4ColRow7to24 + check2accumulationCol5Row20;
    check2accumulationCol5Row21inn.textContent = check2accumulationCol5Row21.toFixed(2);

    let check2accumulationCol5Row22 = check2accumulation4ColRow7to24 + check2accumulationCol5Row21;
    check2accumulationCol5Row22inn.textContent = check2accumulationCol5Row22.toFixed(2);

    let check2accumulationCol5Row23 = check2accumulation4ColRow7to24 + check2accumulationCol5Row22;
    check2accumulationCol5Row23inn.textContent = check2accumulationCol5Row23.toFixed(2);

    let check2accumulationCol5Row24 = check2accumulation4ColRow7to24 + check2accumulationCol5Row23;
    check2accumulationCol5Row24inn.textContent = check2accumulationCol5Row24.toFixed(2);

    let check2reserve = check2accumulationCol5Row6 * 1.2;
    for (let i = 0; i < check2reserveinn.length; i++) {
      check2reserveinn[i].textContent = check2reserve.toFixed(2);
    };


    for (let i = 0; i < check2Col2Row1to6inn.length; i++) {
      check2Col2Row1to6inn[i].textContent = check2sixHoursRain.toFixed(2);
    };
    for (let i = 0; i < check2runoffinn3Col.length; i++) {
      check2runoffinn3Col[i].textContent = check2runoff.toFixed(2);
    };
    for (let i = 0; i < check2accumulation4ColRow1to6inn.length; i++) {
      check2accumulation4ColRow1to6inn[i].textContent = check2accumulation4ColRow1to6.toFixed(2);
    };
    for (let i = 0; i < check2accumulation4ColRow7to24inn.length; i++) {
      check2accumulation4ColRow7to24inn[i].textContent = check2accumulation4ColRow7to24.toFixed(2);
    };



  }
  check1();






};


selectlisttw70.addEventListener('change', calcVolume);
area1.addEventListener('input', calcVolume);
area2.addEventListener('input', calcVolume);
area3.addEventListener('input', calcVolume);
area4.addEventListener('input', calcVolume);
area5.addEventListener('input', calcVolume);
area6.addEventListener('input', calcVolume);
area7.addEventListener('input', calcVolume);
selectTankRow.addEventListener('input', calcVolume);
filterKoef.addEventListener('input', calcVolume);
selectCity.addEventListener('input', calcVolume);
mu.addEventListener('input', calcVolume);
checkTankHeight.addEventListener('input', calcVolume);
procent.addEventListener('input', calcVolume);


   // selectCity.addEventListener('input', select);
