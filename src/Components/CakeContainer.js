import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

const CakeContainer = (props) => {
  // console.log(props)
  return (
    <div>
      <h1 className="App-log"> No of Cakes-{props.numOfCakes}</h1>
      <button onClick={props.buyCake}>buy Cake</button>
    </div>
  );
};
const mapStateToProps = (state) => {
  // console.log(state)
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  // console.log(dispatch)
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
