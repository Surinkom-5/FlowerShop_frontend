import React, {createContext, useReducer} from "react";
import Reducer from '../reducers/reducer'


const defaultState = {
    user: null,
    products: [],
    categories: [],
    cart: null,
    addresses: [],
  };

const Store = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, defaultState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(defaultState);
export default Store;