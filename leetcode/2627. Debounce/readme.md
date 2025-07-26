## en

Given a function fn and a time in milliseconds t, return a debounced version of that function.

A debounced function is a function whose execution is delayed by t milliseconds and whose execution is cancelled if it is called again within that window of time. The debounced function should also receive the passed parameters.

For example, let's say t = 50ms, and the function was called at 30ms, 60ms, and 100ms.

The first 2 function calls would be cancelled, and the 3rd function call would be executed at 150ms.

If instead t = 35ms, The 1st call would be cancelled, the 2nd would be executed at 95ms, and the 3rd would be executed at 135ms.

Debounce Schematic

The above diagram shows how debounce will transform events. Each rectangle represents 100ms and the debounce time is 400ms. Each color represents a different set of inputs.

Please solve it without using lodash's _.debounce() function.

 ## ru
Дана функция fn и время в миллисекундах t. Верните "debounced"-версию этой функции.

Debounced-функция — это функция, выполнение которой откладывается на t миллисекунд и отменяется, если она вызывается повторно в течение этого времени. Debounced-функция также должна принимать переданные в неё параметры.

Например, пусть t = 50 мс, а функция вызывается в моменты времени: 30 мс, 60 мс и 100 мс.

Первые два вызова функции будут отменены, а третий вызов будет выполнен на 150 мс.

Если вместо этого t = 35 мс, то первый вызов будет отменён, второй будет выполнен на 95 мс, а третий — на 135 мс.

Схема Debounce
На схеме выше показано, как debounce преобразует события. Каждый прямоугольник соответствует 100 мс, время debounce — 400 мс. Каждый цвет представляет отдельный набор входных данных.