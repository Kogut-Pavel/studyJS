let money = 30000;
const income = 'Пенсия';
let addExpenses = 'Интернет, подписки, квартира';
let deposit = true;
const mission = 50000;
const period = 6;
let budgetDay = money / 30;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(`Период равен ${period} месяцев`);
console.log(`Цель заработать ${mission} рублей`);

console.log(addExpenses.toLowerCase().split(', '));
console.log(budgetDay);

money = +prompt("Ваш месячный доход?");
addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
deposit = confirm("Есть ли у вас депозит в банке?");

const expenses1 = prompt("Введите обязательную статью расходов");
const amount1 = +prompt("Во сколько это обойдется?");
const expenses2 = prompt("Введите обязательную статью расходов");
const amount2 = +prompt("Во сколько это обойдется?");

const budgetMonth = money - amount1 - amount2;
console.log("Бюджет на месяц: " + budgetMonth);
console.log("Цель будет достигнута за " + Math.ceil(mission / budgetMonth) + " месяцев(-а)");
budgetDay = Math.floor(budgetMonth / 30);
console.log("Бюджет на день: " + budgetDay);

if (budgetDay >= 1200) {
    console.log("У вас высокий уровень дохода");
} else if (budgetDay >= 600 && budgetDay < 1200) {
    console.log("У вас средний уровень дохода");
} else if (budgetDay < 600 && budgetDay >= 0) {
    console.log("К сожалению у вас уровень дохода ниже среднего");
} else {
    console.log("Что-то пошло не так");
}