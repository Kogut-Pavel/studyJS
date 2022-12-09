const mission = 50000;
const period = 6;
const income = 'Пенсия';
let money = 30000;
let addExpenses = 'Интернет, подписки, квартира';
let deposit = true;
let budgetDay = money / 30;

money = +prompt("Ваш месячный доход?");
addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
deposit = confirm("Есть ли у вас депозит в банке?");

const expenses1 = prompt("Введите обязательную статью расходов");
const amount1 = +prompt("Во сколько это обойдется?");
const expenses2 = prompt("Введите обязательную статью расходов");
const amount2 = +prompt("Во сколько это обойдется?");

const showTypeOf = function (data) {
    console.log(data, typeof data);
}


// Функция возвращает сумму всех обязательных расходов за месяц
const getExpensesMonth = function() {
    return amount1 + amount2;
}

// Функция возвращает Накопления за месяц (Доходы минус расходы)
const getAccumulatedMonth = function() {
    return money - getExpensesMonth();
}

// Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления (accumulatedMonth)
const getTargetMonth = function() {
    return Math.ceil(mission / accumulatedMonth);
}

// Получаем статус в зависимости от бюджета на день
const getStatusIncome = function() {
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

const accumulatedMonth = getAccumulatedMonth();

budgetDay = Math.floor(accumulatedMonth / 30);

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log(getExpensesMonth());
console.log(addExpenses.toLowerCase().split(', '));
console.log(getTargetMonth());
console.log(budgetDay);
console.log(getStatusIncome());
