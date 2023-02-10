import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux";

const IceCreamContainer = (props) => {
  return (
    <div>
      <h1> no of icecreams={props.noOfIceCream}</h1>
      <button onClick={props.buyIceCream}>buy ice</button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    noOfIceCream: state.ice.noOfIceCream,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
