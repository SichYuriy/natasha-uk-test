const NatashaUkStarter = require('natasha-uk-starter');

let starter = new NatashaUkStarter('http://localhost:8100', 'mongodb://localhost:27017', {
    info: console.log
});

// Ініціалізує словник весум. Пушить словник в монго базу і індексує. Триває до 10 хв. Виконати лише один раз.
// starter.initVesum();

// entity extraction:
starter.extractPersons(['Президент Білорусії Олександр Лукашенко запросив президента України Володимира Зеленського відвідати з офіційним візитом Білорусь у зручний час.'])
    .then(a => console.log(JSON.stringify(a)));

starter.extractLocations(['Напередодні Дня захисника України міський голова Києва Віталій Кличко взяв участь у церемонії вручення нагород учасникам бойових дій на Донбасі'])
    .then(a => console.log(JSON.stringify(a)));

starter.extractNames(['Президент Білорусії Олександр Лукашенко запросив президента України Володимира Зеленського відвідати з офіційним візитом Білорусь у зручний час.'])
    .then(a => console.log(JSON.stringify(a)));

starter.extractDates(['У 1903 році нагороду отримала Марія Склодовська-Кюрі за дослідження радіації, а в 1963 році Марія Гепперт-Майєр за відкриття, що стосуються структури оболонки ядра. 7 жовтня 2019 року у Швеції почався Нобелівський тиждень.'])
    .then(a => console.log(JSON.stringify(a)));