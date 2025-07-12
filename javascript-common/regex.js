// ^ - начало строки
// $ - конец строки
const catRegex = /^cat$/;
const isEqualCat = catRegex.test("cat");
console.log(isEqualCat);

// . - любой один символ
const c_tRegex = /^c.t$/;
const isEqualC_t = c_tRegex.test("cut");
console.log(isEqualC_t);

// [0-9] - любая цифра
// + - Один или более раз
const numberRegex = /^[0-9]+$/;
const isEqualNumber = numberRegex.test("1");
const isEqualNumberSecond = numberRegex.test("122");
console.log(isEqualNumber);
console.log(isEqualNumberSecond);

/**
 * /^[a-zA-Z]+$/ - буквы латинского алфавита
 * \d - одна цифра
 * \d+ - одна и более цифр
 * \d{3} - определенное количество цифр (в данном примере 3)
 */
