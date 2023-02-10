import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyIceCream } from "../redux/IceCream/CakeAction";

const HooksIceCreamContainer = (props) => {
  const noOfIceCream = useSelector((state) => state.ice.noOfIceCream);

  const dispatch = useDispatch();
  return (
    <div>
      <h1> Hooks ice cream:{noOfIceCream}</h1>
      <button onClick={() => dispatch(buyIceCream())}>buy ice hooks</button>
    </div>
  );
};

export default HooksIceCreamContainer;
