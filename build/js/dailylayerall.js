let selectCity = document.getElementsByName('myBrowser')[0];
let inner1 = document.querySelector('.inner1');
let inner2 = document.querySelector('.inner2');
let inner3 = document.querySelector('.inner3');
let inner4 = document.querySelector('.inner4');

let vodgeo = [
    { "city": "Барнаул", "Нср": "27.7", "Cv": "0.49", "Cs": "2.3" },
    { "city": "Бийск", "Нср": "28,5", "Cv": "0.35", "Cs": "1.4" },
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

let tableCsF = [{ "Cs": 0.4, "F5": 1.75, "F10": 1.32, "F25": 0.63, "F39": 0.21, "F63": -0.40, "F80": -0.85, "F86": -1.08, "F95": -1.53, "F99": -2.04 },
{ "Cs": 0.6, "F5": 1.79, "F10": 1.33, "F25": 0.60, "F39": 0.18, "F63": -0.42, "F80": -0.85, "F86": -1.07, "F95": -1.46, "F99": -1.91 },
{ "Cs": 0.8, "F5": 1.82, "F10": 1.32, "F25": 0.57, "F39": 0.15, "F63": -0.43, "F80": -0.87, "F86": -1.04, "F95": -1.40, "F99": -1.79 },
{ "Cs": 1, "F5": 1.85, "F10": 1.31, "F25": 0.54, "F39": 0.12, "F63": -0.45, "F80": -0.84, "F86": -1.01, "F95": -1.34, "F99": -1.68 },
{ "Cs": 1.2, "F5": 1.87, "F10": 1.31, "F25": 0.52, "F39": 0.10, "F63": -0.46, "F80": -0.82, "F86": -0.99, "F95": -1.29, "F99": -1.58 },
{ "Cs": 1.4, "F5": 1.88, "F10": 1.30, "F25": 0.49, "F39": 0.07, "F63": -0.47, "F80": -0.81, "F86": -0.97, "F95": -1.23, "F99": -1.49 },
{ "Cs": 1.6, "F5": 1.89, "F10": 1.28, "F25": 0.46, "F39": 0.05, "F63": -0.47, "F80": -0.80, "F86": -0.94, "F95": -1.18, "F99": -1.41 },
{
    "Cs": 1.8, "F5": 1.89, "F10": 1.27, "F25": 0.44, "F39": 0.02, F63": -0.48, "F80": -0.78, "F86": -0.92, "F95": -1.14, "F99": -1.34},
                { "Cs": 2, "F5": 1.89, "F10": 1.25, "F25": 0.41, "F39": 0.00, "F63": -0.48, "F80": -0.77, "F86": -0.89, "F95": -1.10, "F99": -1.28 },
                { "Cs": 2.2, "F5": 1.89, "F10": 1.23, "F25": 0.39, "F39": 0.00, "F63": -0.48, "F80": -0.76, "F86": -0.87, "F95": -1.06, "F99": -1.22 },
{ "Cs": 2.4, "F5": 1.88, "F10": 1.21, "F25": 0.37, "F39": -0.03, "F63": -0.48, "F80": -0.74, "F86": -0.86, "F95": -1.02, "F99": -1.17 },
{ "Cs": 2.6, "F5": 1.87, "F10": 1.19, "F25": 0.34, "F39": -0.04, "F63": -0.48, "F80": -0.73, "F86": -0.83, "F95": -0.99, "F99": -1.12 },
{ "Cs": 2.8, "F5": 1.86, "F10": 1.17, "F25": 0.32, "F39": -0.06, "F63": -0.48, "F80": -0.72, "F86": -0.81, "F95": -0.96, "F99": -1.08 },
{ "Cs": 3, "F5": 1.85, "F10": 1.15, "F25": 0.31, "F39": -0.07, "F63": -0.48, "F80": -0.71, "F86": -0.79, "F95": -0.93, "F99": -1.04 },
{ "Cs": 3.2, "F5": 1.84, "F10": 1.13, "F25": 0.29, "F39": -0.08, "F63": -0.48, "F80": -0.69, "F86": -0.77, "F95": -0.90, "F99": -1.01 },
{ "Cs": 3.4, "F5": 1.83, "F10": 1.11, "F25": 0.28, "F39": -0.09, "F63": -0.47, "F80": -0.68, "F86": -0.76, "F95": -0.88, "F99": -0.98 },
{ "Cs": 3.6, "F5": 1.81, "F10": 1.09, "F25": 0.26, "F39": -0.09, "F63": -0.47, "F80": -0.67, "F86": -0.75, "F95": -0.86, "F99": -0.95 },
{ "Cs": 3.8, "F5": 1.80, "F10": 1.08, "F25": 0.25, "F39": -0.10, "F63": -0.47, "F80": -0.66, "F86": -0.73, "F95": -0.84, "F99": -0.92 },
{ "Cs": 4, "F5": 1.78, "F10": 1.06, "F25": 0.24, "F39": -0.11, "F63": -0.47, "F80": -0.65, "F86": -0.72, "F95": -0.82, "F99": -0.90 },
{ "Cs": 4.5, "F5": 1.75, "F10": 1.01, "F25": 0.21, "F39": -0.12, "F63": -0.46, "F80": -0.63, "F86": -0.70, "F95": -0.78, "F99": -0.84 },
{ "Cs": 5, "F5": 1.71, "F10": 0.98, "F25": 0.19, "F39": -0.13, "F63": -0.45, "F80": -0.62, "F86": -0.66, "F95": -0.74, "F99": -0.80 },
{ "Cs": 6, "F5": 1.64, "F10": 0.91, "F25": 0.15, "F39": -0.15, "F63": -0.44, "F80": -0.57, "F86": -0.62, "F95": -0.68, "F99": -0.73 }
];


let select = function () {

    let xxx = function (arr) {
        let x = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].city == selectCity.value) {
                x.push(arr[i].Нср);
                x.push(arr[i].Cv);
                x.push(arr[i].Cs);
                inner1.textContent = arr[i].Нср;
                inner2.textContent = arr[i].Cv;
                inner3.textContent = arr[i].Cs;
            }
        }
        return x;
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

    let calcHa = function () {
        let Ha,
            Fint;
        Fint = findF(tableCsF)[0] - (findF(tableCsF)[0] - findF(tableCsF)[1]) * (xxx(vodgeo)[2] - findCs(tableCsF)[0]) / (findCs(tableCsF)[1] - findCs(tableCsF)[0])
        Ha = xxx(vodgeo)[0] * (1 + xxx(vodgeo)[1] * Fint);

        console.log(Fint, Ha)
    }

    calcHa();

    console.log(xxx(vodgeo)[2], findCs(tableCsF), findF(tableCsF))

};

selectCity.addEventListener('input', select);






















