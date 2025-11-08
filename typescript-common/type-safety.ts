type OrderObject = { order: number };

const testWithoutTypePredicateArray: Array<string | number | OrderObject> = [
  "First",
  3,
  "Third",
  { order: 4 },
];

// Work without type predicate, becouse check primitive types
const withoutTypePredicateArray = testWithoutTypePredicateArray
  .filter((t) => typeof t === "string")
  .map((t) => parseInt(t));

// Work without type predicate, becouse exclude all types, expect OrderObject
const withoutSecondTypePredicateArray = testWithoutTypePredicateArray
  .filter((t) => typeof t !== "string" && typeof t !== "number")
  .map((t) => t.order);

//==================================================================================
type NumberObject = { type: string; number: number };
type CountObject = { type: string; count: number };

const testWithTypePredicateArray: Array<NumberObject | CountObject> = [
  { count: 0, type: "CountObject" },
  { number: 1, type: "NumberObject" },
  { count: 2, type: "CountObject" },
  { number: 3, type: "NumberObject" },
];

const withTypePredicateArray = testWithTypePredicateArray
  .filter((t): t is CountObject => t.type === "CountObject")
  .map((t) => t.count);

//==================================================================================
