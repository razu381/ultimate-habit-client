import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import { Button } from "./components/ui/button";
import DashboardLayout from "./Pages/Dashboard/DashboardLayout";

function App() {
  return (
    <div>
      <DashboardLayout />
      <h2 className="text-chart-4  text-center py-7 font-bold text-6xl">
        Hello world
      </h2>
    </div>
  );
}

export default App;
