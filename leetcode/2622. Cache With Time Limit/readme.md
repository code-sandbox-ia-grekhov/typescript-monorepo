## en
Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

The class has three public methods:

set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

count(): returns the count of un-expired keys.

## ru
Напиши класс, который позволяет устанавливать и получать пары ключ-значение, при этом каждому ключу сопоставлено время до истечения срока действия.

Класс должен содержать три публичных метода:

set(key, value, duration): принимает целочисленные key, value и duration (в миллисекундах). После истечения времени duration ключ должен стать недоступным. Метод должен возвращать true, если уже существует такой же неистекший ключ, и false в противном случае. Если ключ уже существует, как значение, так и продолжительность должны быть перезаписаны.

get(key): если существует неистекший ключ, метод возвращает соответствующее значение. В противном случае возвращает -1.

count(): возвращает количество неистекших ключей.