import * as types from "../actions/action-types";

const initialState = {
  selectedOne: 0,
  selectedTwo: 0,
    query: "Waste_used_2015"
};

const tabAnalysisReducer = function (state = initialState, action) {
  switch (action.type) {
      case types.SELECT_ONE_SELECTED:
          return {...state, selectedOne: action.selected};
      case types.SELECT_TWO_SELECTED:
          return {...state, selectedTwo: action.selected};
      case types.QUERY_VALUE:
          return {...state, query: action.queryValue};
      default:
          return state;
  }
};

export default tabAnalysisReducer;