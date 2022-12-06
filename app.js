const money = 30000;
const income = 'Пенсия';
const addExpenses = 'Интернет, подписки, квартира';
const deposit = true;
const mission = 50000;
const period = 6;
const budgetDay = money / 30;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(`Период равен ${period} месяцев`);
console.log(`Цель заработать ${mission} рублей`);


console.log(addExpenses.toLowerCase().split(', '));
console.log(budgetDay);