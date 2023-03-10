import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { buyCake } from "../redux";

const HooksCakeContainer = () => {
    const numOfCakes=useSelector(state=>state.cake.numOfCakes)
    const dispatch=useDispatch()
  return (
    <div>
      <h2> No of Cakes :{numOfCakes}</h2>
      <button onClick={()=>dispatch(buyCake())}> Buy cake Hooks</button>
    </div>
  );
};

export default HooksCakeContainer;
