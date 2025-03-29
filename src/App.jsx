import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import { CiSettings } from "react-icons/ci";
import { MdClose } from "react-icons/md";

function App() {
  return (
    <main className="container">
      <button id="buttonSettings"><CiSettings /></button>

      <div className="filescaner">
        <h3>Scan File</h3>
        <input type="file" name="fileInput" id="fileInput"/>
        <button id="buttonScan">Scan</button>

        <p id="infoText">Test</p>
      </div>
    </main>
  );
}

export default App;