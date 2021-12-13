import { Chance } from "chance";
export const GENERATE_NAMES = "GENERATE_NAMES";
export const ADD_NAME = "ADD_NAME";
export const REMOVE_NAME = "REMOVE_NAME";
export const REMOVE_ALL = "REMOVE_ALL";
const chance = new Chance(Math.random);

const initialState = {
  nameList: [] as { name: string; id: string }[],
};

type ActionType =
  | {
      type: "GENERATE_NAMES";
    }
  | {
      type: "ADD_NAME";
      payload: {
        name: string;
      };
    }
  | {
      type: "REMOVE_NAME";
      payload: {
        id: string;
      };
    }
  | {
      type: "REMOVE_ALL";
    };

export const nameListReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case GENERATE_NAMES: {
      const generatedNames = Array.from(Array(10).keys()).map(() => ({
        name: chance.name(),
        id: chance.android_id(),
      }));

      return {
        nameList: [...state.nameList, ...generatedNames],
      };
    }
    case ADD_NAME: {
      return {
        nameList: [
          ...state.nameList,
          { name: action.payload.name, id: chance.android_id() },
        ],
      };
    }
    case REMOVE_NAME: {
      return {
        nameList: [
          ...state.nameList.filter((data) => data.id !== action.payload.id),
        ],
      };
    }

    case REMOVE_ALL: {
      return {
        nameList: [],
      };
    }
    default:
      return state;
  }
};
