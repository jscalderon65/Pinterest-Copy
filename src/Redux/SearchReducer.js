import { types } from "./Types/Types.js";
const initialState ={
    InputSearhValue:""
}
export const SearchReducer = (state = initialState, action) => {
  console.log(action); 
  switch (action.type) {
    case types.getInputSearchValue:
      return {
        InputSearhValue:action.value
      };
    default:
      return state;
  }
};