import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";

const rootReducer = combineReducers({
  counter,
  todos
});

export default rootReducer;

//여러 리듀서를 하나로 통합하기 위한 파일
