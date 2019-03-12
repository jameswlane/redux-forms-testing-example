import * as redux from "redux";

describe("Root Reducer Test Suite", () => {
  beforeEach(() => {
    jest
      .spyOn(redux, "combineReducers")
      .mockImplementation(jest.fn(reducers => reducers));
  });

  test("should combine the reducers", () => {
    const root = require("./index");

    expect(root.default).toMatchObject({});
  });
});
