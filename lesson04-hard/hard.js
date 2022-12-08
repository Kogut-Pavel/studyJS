const isString = function (val) {
    return (typeof val === 'string' || val instanceof String);
}

const foo = function (data) {
    if (!isString(data)) {
        return "Это не строка!";
    }
    data = data.trim();
    if (data.length > 30) {
        data = `${data.slice(0, 30)}...`;
    }
    return data;
}

console.log(foo('              Я хочу рассказать о себе: родился в небольшом городе, где    '));

