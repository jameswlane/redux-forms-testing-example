jest.mock("./reducers/index", () => {
  return { default: "MOCKED_ROOT_REDUCER" };
});

describe("Store Test Suite", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test("should not have devtools", () => {
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ = undefined;
    const redux = require("redux");
    const dispatchMock = jest.fn();
    jest.spyOn(redux, "createStore").mockImplementation(a => {
      return {
        a,
        dispatch: dispatchMock
      };
    });
    jest.spyOn(redux, "compose");

    require("./store");

    expect(redux.compose).toHaveBeenCalled();
  });

  test("should have devtools", () => {
    const mockedComposeEnhancer = jest.fn(() => "MOCKED_COMPOSE_ENHANCER");
    const reduxDevTools = jest.fn(() => mockedComposeEnhancer);

    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ = reduxDevTools;
    const redux = require("redux");
    const dispatchMock = jest.fn();
    jest.spyOn(redux, "createStore").mockImplementation(a => {
      return {
        a,
        dispatch: dispatchMock
      };
    });
    jest.spyOn(redux, "compose");

    require("./store");

    expect(redux.compose).not.toHaveBeenCalled();
    expect(reduxDevTools).toHaveBeenCalledWith({});
    expect(redux.createStore).toHaveBeenCalledWith(
      { default: "MOCKED_ROOT_REDUCER" },
      mockedComposeEnhancer()
    );
  });

  test("should not dispatch at initialization", () => {

    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ = undefined;
    const redux = require("redux");
    const dispatchMock = jest.fn();
    jest.spyOn(redux, "createStore").mockImplementation(a => {
      return {
        a,
        dispatch: dispatchMock
      };
    });

    jest.spyOn(redux, "compose");

    require("./store");

    expect(redux.compose).toHaveBeenCalled();
    expect(dispatchMock).toHaveBeenCalledTimes(0);
  });
});
