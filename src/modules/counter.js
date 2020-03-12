const INCREASE = "counter/INCREASE"; //액션타입은 대문자, 모듈이름/액선이름
const DECREASE = "counter/DECREASE";

//Action 생성 함수
//export를 사용하면 다른 파일에서 해당 함수 호출 가능
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

const initiaState = {
  number: 0
};

function counter(state = initiaState, action) {
  switch (action.type) {
    case INCREASE:
      return { number: state.number + 1 };
    case DECREASE:
      return { number: state.number - 1 };
    default:
      return state;
  }
}

export default counter;
// export default는 함수를 단 한개만 보낼 수 있다 