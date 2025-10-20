import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorBoundary from "./ErrorBoundary";

function HomeScreen() {
  return <h1>Home</h1>;
}

function ProfileScreen() {
  return <h1>Profile Screen</h1>;
}

function ShopScreen() {
  throw new Error("Shop page crashed!");
}

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-3" style={{gap: "20px"}}> 
        <NavLink className="nav-link" to="/" style={{color : "blue"}}>Home</NavLink>
        <NavLink className="nav-link" to="/profile" style={{color : "blue"}}>Profile</NavLink>
        <NavLink className="nav-link" to="/shop" style={{color : "blue"}}>Shop</NavLink>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <ErrorBoundary>
              <HomeScreen />
            </ErrorBoundary>
          }
        />
        <Route
          path="/profile"
          element={
            <ErrorBoundary>
              <ProfileScreen />
            </ErrorBoundary>
          }
        />
        <Route
          path="/shop"
          element={
            <ErrorBoundary>
              <ShopScreen />
            </ErrorBoundary>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
