import "./App.css";
import Header from "./components/Header.js";
import Balance from "./components/Balance.js";
import IncomeExpenses from "./components/IncomeExpenses.js";
import TransactionList from "./components/TransactionList.js";
import AddTransaction from "./components/AddTransaction.js";
import { GlobalProvider } from "./context/Globalstate";
function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
