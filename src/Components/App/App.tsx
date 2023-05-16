import  { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Form from "../Form/Form";
import Results from "../Results/Results";

interface Concerns {
  concerns: {
    [index:string]: {
      summary: string;
      scheduleDate: string;
    }
  }
}

const App = () => {
  const [error, setError] = useState("");
  const [concerns, setConcerns] = useState<Concerns | null>(null);

  return (
    <div className="App">
      <Header />
      {error ? (
        <h1>{error}</h1>
      ) : (
        <main className="main-content">
          {concerns ? 
          <Results /> :
          <>
            <h1 className="heading">Terms of Service Processor</h1>
            <p className="sub-heading">Understand what's important to you.</p>
            <Form setConcerns={setConcerns} setError={setError}/>
          </>}
        </main>
      )}
    </div>
  );
};

export default App;
