import React from "react";
import "./App.css";
import Header from "../Header/Header";
import Form from "../Form/Form";
// import Results from "../Results/Results";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <h1 className="heading">Terms of Service Processor</h1>
        <p className="sub-heading">Understand what's important to you.</p>
        <Form />
        {/* <Results /> */}
      </main>
    </div>
  );
};

export default App;
