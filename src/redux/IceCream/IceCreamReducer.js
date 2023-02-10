import {BUY_ICE_CREAM} from "../IceCream/IceCreamTypes";

const intialState = {
  noOfIceCream: 20,
};
const IceCreamReducer = (state = intialState, actions) => {
  switch (actions.type) {
    case BUY_ICE_CREAM:
      return {
        noOfIceCream: state.noOfIceCream - 1,
      };
      default :return state
  }
};
export default IceCreamReducer;
