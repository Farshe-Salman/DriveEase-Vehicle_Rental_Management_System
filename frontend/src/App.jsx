import { Routes, Route } from "react-router-dom";

import Home from "./pages/public/Home";

import Vehicles from "./pages/public/Vehicles";

import VehicleDetails from "./pages/public/VehicleDetails";

import Auth from "./pages/auth/Auth";

import Profile from "./pages/dashboard/Profile";

import CustomerDashboard from "./pages/dashboard/CustomerDashboard";

import AdminLayout from "./layouts/AdminLayout";

import AdminDashboard from "./pages/admin/AdminDashboard";

import ManageVehicles from "./pages/admin/ManageVehicles";

import ManageCustomers from "./pages/admin/ManageCustomers";

import ManageReservations from "./pages/admin/ManageReservations";

import ManageBookings from "./pages/admin/ManageBookings";

import ManageEmployees from "./pages/admin/ManageEmployees";

import ManageBranches from "./pages/admin/ManageBranches";

import ManageMaintenance from "./pages/admin/ManageMaintenance";

import ManagePayments from "./pages/admin/ManagePayments";

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

      <Route
        path="/admin"
        element={<AdminLayout />}
      >

        <Route
          path="dashboard"
          element={<AdminDashboard />}
        />

        <Route
          path="vehicles"
          element={<ManageVehicles />}
        />

        <Route
          path="customers"
          element={<ManageCustomers />}
        />

        <Route
          path="reservations"
          element={<ManageReservations />}
        />

        <Route
          path="bookings"
          element={<ManageBookings />}
        />

        <Route
          path="employees"
          element={<ManageEmployees />}
        />

        <Route
          path="branches"
          element={<ManageBranches />}
        />

        <Route
          path="maintenance"
          element={<ManageMaintenance />}
        />

        <Route
          path="payments"
          element={<ManagePayments />}
        />

      </Route>

    </Routes>

  );

}

export default App;