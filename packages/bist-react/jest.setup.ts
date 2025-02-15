import "@testing-library/jest-dom";

// Suppress console.warn during tests
beforeAll(() => {
  jest.spyOn(console, "warn").mockImplementation(() => {});
});

afterAll(() => {
  jest.clearAllMocks();
});
