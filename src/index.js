import React from "react";
import { createRoot } from "react-dom/client";
import NavBar from "./components/NavBar";
import Stories from "./components/Stories";

function App() {
  return (
    <>
      <NavBar />
      <Stories />
    </>
  );
}

createRoot(document.querySelector(".root")).render(<App />);
