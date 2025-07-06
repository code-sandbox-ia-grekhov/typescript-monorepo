console.log("============================================");
console.log("objectWithGetSetDescriptor");

const objectWithGetSetDescriptor = {};

Object.defineProperty(
  objectWithGetSetDescriptor,
  "viewFieldWithGetter",
  (() => {
    let value = "";

    return {
      // Геттер позволяет "на лету" преобразовывать значение свойства
      get: () => `Value: ${value}`,
      // Сеттер позволяет устанавливать значение. Необходим для работы геттера
      set: (val) => (value = val),
      // По умолчанию всегда true - определяет видимость ключа
      enumerable: true,
      // Позволяет управлять свойством - удалять и менять его конфигурацию
      configurable: true,
    };
  })()
);

objectWithGetSetDescriptor.viewFieldWithGetter = "test";

console.log(JSON.stringify(objectWithGetSetDescriptor, null, 2));
console.log(objectWithGetSetDescriptor.viewFieldWithGetter);

console.log("============================================");
console.log("objectWithHiddenProperties");

const objectWithHiddenProperties = {};

Object.defineProperty(objectWithHiddenProperties, "hiddenField", {
  enumerable: false,
  configurable: false,
  // Позволяет изменять значение свойства
  writable: true,
  value: "hidden",
});

// Один из способов получить все ключи, включая скрытые через enumerable false
const allKeys = Reflect.ownKeys(objectWithHiddenProperties);
const descriptors = Object.getOwnPropertyDescriptors(
  objectWithHiddenProperties
);

console.log(JSON.stringify(objectWithHiddenProperties, null, 2));
console.log(objectWithHiddenProperties.hiddenField);
console.log(allKeys);
console.log(descriptors);
