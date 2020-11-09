type Person = {
  name: string;
  age: number;
};

/**
 * keyof
 */
type PersonAttribute = keyof Person;
const ageAttribute: PersonAttribute = "age";
const nameAttribute: PersonAttribute = "name";
// const randomAttribute: PersonAttribute = "random";

/**
 * Extract
 */
type OnlyNumbers = Extract<"a" | "b" | 1 | 2, number>;

/**
 * Pick
 */
type HasThen<T> = Pick<Promise<T>, "then">;
const hasThen: HasThen<number> = Promise.resolve(4);
hasThen.then;
// hasThen.catch;

/**
 * Omit
 */
type JustName = Omit<Person, "age">;
const justName: JustName = {
  name: "Rajat",
  // age: 12
};

/**
 * Partials
 */
type NameOrAge = Partial<Person>;
const data: NameOrAge = {
  name: "Rajat",
};

/**
 * Exclude
 */
type NotStrings = Exclude<"a" | "b" | 1 | 2, string>;

/**
 * Record
 */
type PersonAttributeFilters = Record<
  "name" | "age",
  (attr: Person[keyof Person]) => Promise<Person[]>
>;
type Dict = Record<string, string>;
type HasMap = Record<string, any>;
