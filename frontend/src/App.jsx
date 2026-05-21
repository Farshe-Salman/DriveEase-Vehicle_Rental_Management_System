import { Routes, Route } from "react-router-dom";

import Home from "./pages/public/Home";

import Vehicles from "./pages/public/Vehicles";

import VehicleDetails from "./pages/public/VehicleDetails";

import Auth from "./pages/auth/Auth";

import Profile from "./pages/dashboard/Profile";

import CustomerDashboard from "./pages/dashboard/CustomerDashboard";


function App() {

  return (

    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/vehicles"
        element={<Vehicles />}
      />

      <Route
        path="/vehicles/:id"
        element={<VehicleDetails />}
      />


      <Route
        path="/login"
        element={<Auth />}
      />

      <Route
        path="/profile"
        element={<Profile />}
      />

      <Route
        path="/dashboard"
        element={<CustomerDashboard />}
      />

    </Routes>

  );

}

export default App;