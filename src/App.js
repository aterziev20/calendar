import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Header from "./components/Header";
import Calendar from "./components/Calendar";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Calendar />
      </div>
    </Provider>
  );
}

export default App;
