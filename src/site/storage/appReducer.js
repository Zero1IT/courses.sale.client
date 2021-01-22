const init = {
  accessToken: null,
};

const reducerActions = new Map();

export const appReducer = (state = init, action) => {
  const actionFunction = reducerActions.get(action.type);
  if (actionFunction) {
    const result = actionFunction(state, action.payload);
    return result ? result : state;
  }
  return state;
}