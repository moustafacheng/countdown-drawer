export const SET_TARGET_TIME = "SET_TARGET_TIME";

const initialState = {
  targetTime: 0,
};

type ActionType = {
  type: "SET_TARGET_TIME";
  payload: number;
};

export const targetTimeReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case SET_TARGET_TIME: {
      return {
        targetTime: action.payload,
      };
    }
    default:
      return state;
  }
};
