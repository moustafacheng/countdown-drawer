import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { counterStatusReducer } from "./counterStatusReducer";
import { nameListReducer } from "./nameListReducer";
import { targetTimeReducer } from "./targetTimeReducer";

export interface RootState {
  counter: {
    hours: string;
    minutes: string;
    seconds: string;
    mode: "min" | "sec";
  };
  nameList: {
    nameList: { name: string; id: string }[];
  };
  counterStatus: {
    status: "initial" | "started" | "ended" | "paused";
  };
  targetTime: {
    targetTime: number;
  };
}

const allReducers = combineReducers({
  counter: counterReducer,
  nameList: nameListReducer,
  counterStatus: counterStatusReducer,
  targetTime: targetTimeReducer,
});

export default allReducers;
