import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import About from "./components/about/About";
import CreatePlan from "./components/plan/CreatePlan";
import Prefences from "./components/plan/planlist/Prefences";
import Bean from "./components/plan/planlist/Bean";
import Quantity from "./components/plan/planlist/Quantity";
import Grind from "./components/plan/planlist/Grind";
import Deliver from "./components/plan/planlist/Deliver";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<App/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="create-plan" element={<CreatePlan/>}>
          <Route path="prefences" element={<Prefences/>}/>
          <Route path="bean" element={<Bean/>}/>
          <Route path="quantity" element={<Quantity/>}/>
          <Route path="grind" element={<Grind/>}/>
          <Route path="deliver" element={<Deliver/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
);

reportWebVitals();
