// Test structure
describe("describe groups tests", () => {
  beforeAll(() => {
    /* Runs before all tests */
  });
  afterAll(() => {
    /* Runs after all tests */
  });
  beforeEach(() => {
    /* Runs before each test */
  });
  afterEach(() => {
    /* Runs after each test */
  });

  test("test is the api for a test", () => {
    expect(0).toEqual(0);
  });

  it("it is an alias for test", () => {
    expect(0).toEqual(0);
  });
});

// Assertions
it("demo basic assertions", () => {
  //any
  expect(42).toBe(42); // Strict equality (===)
  expect(42).not.toBe(3); // Strict equality (!==)
  expect([1, 2]).toEqual([1, 2]); // Deep equality
  expect({ a: undefined, b: 2 }).toEqual({ b: 2 }); // Deep equality
  //numbers
  expect(2).toBeGreaterThan(1);
  //strings
  expect("long string").toMatch("str");
  expect("coffee").toMatch(/ff/);
  //arrays
  expect(["Alice", "Bob", "Eve"]).toHaveLength(3);
  expect(["Alice", "Bob", "Eve"]).toContain("Alice");
  //objects
  expect({ a: 1 }).toHaveProperty("a");
  expect({ a: 1 }).toHaveProperty("a", 1);
  expect({ a: { b: 1 } }).toHaveProperty("a.b");
});

// TODO demo mocks ...
