import {extend} from "../utils";
import {ActionType} from "./actions";

const initialState = {
  tree: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_DATA:
      return extend(state, {
        tree: action.payload,
      })
  }

  return state;
};

export {reducer};
