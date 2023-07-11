import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import PatientRegistration from "./components/PatientRegistration";
import OpdRegistration from "./components/OpdRegistration";
import MrRegistration from "./components/MrRegistration";
import Ipdbill from "./components/Ipdbill";
import Template from "./components/Template";
import Table from "./components/Table";
import Ipd from "./components/Ipd";
import Nestedtab from "./components/Nestedtab";
import IPDservices from "./components/IPDservices";
import Ipdothers from "./components/Ipdothers";
import Pathalogy from "./components/Pathalogy";
import Opdappointment from "./components/Opdappointment";
import Sidebar from "./components/Sidebar";
import OpdBill from "./components/OpdBill";
import Options from  "./components/Options"
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route
            path="/patientreg"
            exact
            element={<PatientRegistration />}
          ></Route>
          <Route
            path="/mrregistration"
            exact
            element={<MrRegistration />}
          ></Route>
          <Route
            path="/opdregistration"
            exact
            element={<OpdRegistration />}
          ></Route>
          <Route path="/ipdbill" exact element={<Ipdbill />}></Route>
          <Route path="/template" exact element={<Template />}></Route>
          <Route path="/table" exact element={<Table />}></Route>
          <Route path="/ipd" exact element={<Ipd />}></Route>
          <Route path="/nestedtab" exact element={<Nestedtab />}></Route>
          <Route path="/ipdservices" exact element={<IPDservices />}></Route>
          <Route path="/ipdothers" exact element={<Ipdothers />}></Route>
          <Route path="/pathalogy" exact element={<Pathalogy />}></Route>
          <Route path="/Opdappointment" exact element={<Opdappointment />}></Route>
          <Route path="/sidebar" exact element={<Sidebar />}></Route>
          <Route path="/opdbill" exact element={<OpdBill />}></Route>
          <Route path="/options" exact element={<Options />}></Route>

  </Routes>
      </Router>
    </div>
  );
}

export default App;
