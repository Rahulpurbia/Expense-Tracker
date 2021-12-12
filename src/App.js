import "./App.css";
import Balance_display from "./components/Balance_display";
import History from "./components/History";
import Add_trns from "./components/Add_trns";
import Context from "./components/context";

function App() {
  return (
    <div className="App">
      <Context>
        <h3>Expense Tracker</h3>
        <div className="Wrap">
          <Balance_display />

          <History />

          <Add_trns />
        </div>
      </Context>
    </div>
  );
}

export default App;
