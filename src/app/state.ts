interface State {
  running: boolean;
  exitCode: number;
}

const state: State = {
  running: false,
  exitCode: 0,
};

export const appState = {
  get running(): boolean {
    return state.running;
  },
  set running(value: boolean) {
    state.running = value;
  },
  get exitCode(): number {
    return state.exitCode;
  },
  set exitCode(value: number) {
    state.exitCode = value;
  },
};
