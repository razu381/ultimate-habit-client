import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import DashboardLayout from "./Pages/Dashboard/DashboardLayout";
import MonthlyHabit from "./Pages/Dashboard/MonthlyHabit/MonthlyHabit";
import Stats from "./Pages/Dashboard/MonthlyHabit/Stats";
import Home from "./Pages/Home/Home";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="monthly" element={<MonthlyHabit />} />
          <Route path="stats" element={<Stats />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
