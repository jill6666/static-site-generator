import { store } from "./store";
import { pageActions } from "./pageSlice";

const redux = { ...pageActions };

Object.entries(redux).forEach(([key, func]) => {
  redux[key] = (args) => store.dispatch(func(args));
});

export default redux;
