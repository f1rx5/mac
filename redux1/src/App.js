import React from "react";
import Product from "./Product/Product";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Product/>
      </Provider>
    </div>
  );
};

export default App;
