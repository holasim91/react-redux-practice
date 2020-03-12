import React from "react";
import { connect } from "react-redux";
import Counter from "../Components/Counter";
import {increase, decrease} from '../modules/counter'

function CounterContainer({ number, increase, decrease }) {
  return <Counter number={number} onIncrease={increase} onDecrease={decrease}/>;
}

const mapStateToProps = state => ({
  number: state.counter.number
});

const mpaDispatchToProps = dispatch => ({
  increase: () => {
    dispatch(increase())
  },
  decrease: () => {
    dispatch(decrease())
  }
});
export default connect(mapStateToProps, mpaDispatchToProps)(CounterContainer);
