import { convertToMinutes, convertToSeconds, formatTime } from "../utils/time";

export const CHANGE_MODE = "CHANGE_MODE";
export const CHANGE_TIME = "CHANGE_TIME";
export const COUNTDOWN = "COUNTDOWN";

const initialState = {
  hours: "00",
  minutes: "00",
  seconds: "00",
  mode: "min",
};

type ActionType =
  | {
      type: "CHANGE_MODE";
      payload: "min" | "sec";
    }
  | {
      type: "CHANGE_TIME";
      payload: {
        operation: "increment" | "decrement" | undefined;
        value: number;
      };
    }
  | {
      type: "COUNTDOWN";
    };

export const counterReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case COUNTDOWN: {
      const time =
        (convertToSeconds({
          hours: state.hours,
          minutes: state.minutes,
          seconds: state.seconds,
        }) -
          1) *
        1000;

      return {
        ...state,
        ...formatTime(time),
      };
    }

    case CHANGE_MODE:
      if (action.payload === "sec") {
        const time =
          convertToSeconds({
            hours: state.hours,
            minutes: state.minutes,
            seconds: state.seconds,
          }) * 1000;

        return {
          ...state,
          mode: action.payload,
          ...formatTime(time),
        };
      } else {
        const time =
          Math.floor(
            convertToSeconds({
              hours: state.hours,
              minutes: state.minutes,
              seconds: state.seconds,
            }) / 60
          ) *
          1000 *
          60;

        return {
          ...state,
          mode: action.payload,
          ...formatTime(time),
        };
      }

    case CHANGE_TIME: {
      if (state.mode === "min") {
        if (action.payload.operation === "increment") {
          const newTime =
            (convertToMinutes({ hours: state.hours, minutes: state.minutes }) +
              1) *
            60 *
            1000;
          return {
            ...state,
            ...formatTime(newTime),
          };
        } else if (action.payload.operation === "decrement") {
          const minutes = convertToMinutes({
            hours: state.hours,
            minutes: state.minutes,
          });
          const newTime = (minutes - 1) * 60 * 1000;
          if (minutes === 0) {
            return state;
          } else {
            return {
              ...state,
              ...formatTime(newTime),
            };
          }
        } else {
          return {
            ...state,
            ...formatTime(action.payload.value * 60 * 1000),
          };
        }
      } else {
        if (action.payload.operation === "increment") {
          const newTime =
            (convertToSeconds({
              hours: state.hours,
              minutes: state.minutes,
              seconds: state.seconds,
            }) +
              1) *
            1000;
          return {
            ...state,
            ...formatTime(newTime),
          };
        } else if (action.payload.operation === "decrement") {
          const seconds = convertToSeconds({
            hours: state.hours,
            minutes: state.minutes,
            seconds: state.seconds,
          });
          const newTime = (seconds - 1) * 1000;
          if (seconds === 0) {
            return state;
          } else {
            return {
              ...state,
              ...formatTime(newTime),
            };
          }
        } else {
          return {
            ...state,
            ...formatTime(action.payload.value * 1000),
          };
        }
      }
    }

    default:
      return state;
  }
};
