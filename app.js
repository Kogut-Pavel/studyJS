'use strict';

const isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

const showTypeOf = function (data) {
    console.log(data, typeof data);
}

let money = 30000;
const mission = 50000;
let period = 6;


const start = function () {
    do {
        money = prompt("Ваш месячный доход?", "50000");
    } while (!isNumber(money));
}

start();

let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
let deposit = confirm("Есть ли у вас депозит в банке?");
let expenses = [];

// Функция возвращает сумму всех обязательных расходов за месяц
const getExpensesMonth = function() {
    let sum = 0;
    let check = 0;
    for (let i = 0; i < 2; i++) {
        expenses[i] = prompt('Введите обязательную статью расходов?');
        do {
            check = prompt('Во сколько это обойдется?');
        } while (!isNumber(check));
        sum += +check;
    }
    console.log(expenses);
    return sum;
}

let expensesMonth = getExpensesMonth();

// Функция возвращает Накопления за месяц (Доходы минус расходы)
const getAccumulatedMonth = function(userMoney, expensesMonth) {
    return userMoney - expensesMonth;
}

const accumulatedMonth = getAccumulatedMonth(money, expensesMonth);

// Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления (accumulatedMonth)
const getTargetMonth = function() {
    period = Math.ceil(mission / accumulatedMonth);
    if (period < 0) {
        return "Цель не будет достигнута";
    }
    return `Цель будет достигнута за ${period} месяцев(-а)`;
}

// Получаем статус в зависимости от бюджета на день
const getStatusIncome = function(budgetDay) {
    if (budgetDay >= 1200) {
        return "У вас высокий уровень дохода";
    } else if (budgetDay >= 600 && budgetDay < 1200) {
        return "У вас средний уровень дохода";
    } else if (budgetDay < 600 && budgetDay >= 0) {
        return "К сожалению у вас уровень дохода ниже среднего";
    } else {
        return "Что-то пошло не так";
    }
}

function getBudgetDay(userAccumulatedMonth) {
    return Math.floor(userAccumulatedMonth / 30);
}

const budgetDay = getBudgetDay(accumulatedMonth);

// showTypeOf(money);
// showTypeOf(income);
// showTypeOf(deposit);

console.log(`Расходы за месяц: ${expensesMonth}`);
console.log(addExpenses.toLowerCase().split(', '));
console.log(getTargetMonth());
console.log(`Бюджет на день: ${budgetDay}`);
console.log(getStatusIncome(budgetDay));
