import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

const NewCakeContainer = (props) => {
    const [number,setNumber]=useState(1)

  return (
    <div>
        <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}/>
      <h1 className="App-log"> No of Cakes-{props.numOfCakes}</h1>
      <button onClick={()=>props.buyCake(number)}>buy Cake{number}</button>
    </div>
  );
};
const mapStateToProps = (state) => {

  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  // console.log(dispatch)
  return {
    buyCake: number => dispatch(buyCake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
