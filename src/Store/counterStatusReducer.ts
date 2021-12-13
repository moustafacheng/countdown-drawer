import { convertToMinutes, convertToSeconds, formatTime } from "../utils/time";

export const RESET = "RESET";
export const START = "START";
export const PAUSE = "PAUSE";
export const END = "END";
export type StateType = {
  status: "initial" | "started" | "ended" | "paused";
};
type ActionType =
  | {
      type: "RESET";
    }
  | {
      type: "START";
    }
  | {
      type: "PAUSE";
    }
  | {
      type: "END";
    };

const initialState: StateType = {
  status: "initial",
};
export const counterStatusReducer = (
  state = initialState,
  action: ActionType
): StateType => {
  switch (action.type) {
    case RESET: {
      return {
        status: "initial",
      };
    }
    case PAUSE: {
      return {
        status: "paused",
      };
    }
    case END: {
      return {
        status: "ended",
      };
    }
    case START: {
      return {
        status: "started",
      };
    }
    default:
      return state;
  }
};
