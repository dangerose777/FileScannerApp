import { useEffect, useState } from "react";
import "./App.css";
import { CiSettings } from "react-icons/ci";
import { MdClose } from "react-icons/md";

function App() {
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.classList.remove("theme-light", "theme-dark");
    document.documentElement.classList.add(`theme-${theme}`);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <main className="container">
      <button id="btnSettings" onClick={() => setIsSettingsVisible(true)}><CiSettings /></button>

      <div className="filescaner">
        <h3>Scan File</h3>
        <input type="file" name="fileInput" id="fileInput"/>
        <button id="btnScan">Scan</button>

        <p id="infoText">info text</p>
      </div>

      {isSettingsVisible && (
        <div className="settingsPanel">
          <div className="bg">
          </div>
          <div className="panel">
            <h1>Settings</h1>
            <button id="btnCloseSettings" onClick={() => setIsSettingsVisible(false)}><MdClose /></button>
            <select id="slctTheme" value={theme} onChange={(e) => setTheme(e.target.value)}>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;