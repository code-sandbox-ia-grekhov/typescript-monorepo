## en
Given an array of asynchronous functions functions, return a new promise promise. Each function in the array accepts no arguments and returns a promise. All the promises should be executed in parallel.

promise resolves:

When all the promises returned from functions were resolved successfully in parallel. The resolved value of promise should be an array of all the resolved values of promises in the same order as they were in the functions. The promise should resolve when all the asynchronous functions in the array have completed execution in parallel.
promise rejects:

When any of the promises returned from functions were rejected. promise should also reject with the reason of the first rejection.
Please solve it without using the built-in Promise.all function.

## ru
Дана массив асинхронных функций functions. Нужно вернуть новый промис promise. Каждая функция в массиве не принимает аргументов и возвращает промис. Все промисы должны выполняться параллельно.

Промис promise разрешается (resolve):
Когда все промисы, возвращённые из функций, успешно разрешились параллельно. Значением разрешённого промиса должен быть массив всех результатов промисов в том же порядке, в каком идут функции в массиве. Промис должен разрешиться, когда все асинхронные функции в массиве завершат выполнение параллельно.

Промис promise отклоняется (reject):
Когда любой из промисов, возвращённых из функций, отклоняется. В таком случае promise должен тоже отклониться с причиной первого отклонения.

Задача: решить это без использования встроенной функции Promise.all.