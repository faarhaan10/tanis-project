import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "./Components/Authentication/Registration";
import BillingList from "./Components/Billing/BillingList";
import AddBilling from "./Components/Billing/AddBilling";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Registration />}></Route>
          <Route path="/billingList" element={<BillingList />}></Route>
          <Route path="/addBill" element={<AddBilling />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Routes>
        <Route exact path="/" element={<Registration />} />
        <Route exact path="/billingList" element={<BillingList />} />
      </Routes> */}
      {/* <Registration />
      <BillingList /> */}
    </div>
  );
}

export default App;
