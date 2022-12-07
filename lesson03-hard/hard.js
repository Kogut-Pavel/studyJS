// Задача №1

const lang = 'ru';
const ruDays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const enDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

if (lang === 'ru') {
    console.log(String(ruDays));
}

if (lang === 'en') {
    console.log(String(enDays));
}

switch (lang) {
    case 'ru':
        console.log(String(ruDays));
        break;
    case 'en':
        console.log(String(enDays));
        break;
}

lang === 'ru' ?  console.log(String(ruDays)) : console.log(String(enDays));

const getDayName = (number, lang) => ({
    en: [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ],
    ru: [ 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье' ],
})[lang][number - 1];

console.log(getDayName(5, 'en')) // Friday
console.log(getDayName(7, 'ru')) // Воскресенье

const lang_array = [];
lang_array['ru'] = ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'];
lang_array['en'] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
console.log(lang_array[lang][0]);
console.log(lang_array);


// Задача №2

const namePerson = 'Павел';

namePerson === 'Артем' ? console.log('Директор') :
    (namePerson === 'Максим') ? console.log('Преподаватель') :
    console.log('Студент');

