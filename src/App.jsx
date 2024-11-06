import React from "react";
import Header from "./components/Header";
import { ThemeProvider } from "./context/ThemeContext";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <ThemeProvider>
        <Header />
        <Outlet />
      </ThemeProvider>
    </>
  );
}

export default App;
