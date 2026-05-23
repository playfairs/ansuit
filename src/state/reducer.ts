export type Reducer<S, A> = (state: S, action: A) => S;

export function createStore<S, A>(
  initialState: S,
  reducer: Reducer<S, A>
): { getState: () => S; dispatch: (action: A) => void } {
  let state = initialState;

  const getState = (): S => state;

  const dispatch = (action: A): void => {
    state = reducer(state, action);
  };

  return { getState, dispatch };
}
