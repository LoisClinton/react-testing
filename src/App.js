import React, { useState } from "react";

const lightTheme = { backgroundColor: "#FFF", color: "#333" };
const darkTheme = { backgroundColor: "#333", color: "#FFF" };

function App() {
  const [theme, setTheme] = useState("light");
  const [showHidden, setShowHidden] = useState(false);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  }

  function toggleHidden() {
    setShowHidden(!showHidden);
  }

  const color =
    theme === "light" ? `${lightTheme.color}` : `${darkTheme.color}`;
  const backgroundColor =
    theme === "light"
      ? `${lightTheme.backgroundColor}`
      : `${darkTheme.backgroundColor}`;

  document.body.style.color = color;
  document.body.style.backgroundColor = backgroundColor;

  return (
    <div className="container">
      <h1>Welcome, party people!</h1>
      <p>Click the button to toggle the theme</p>

      <button onClick={toggleTheme}>Current theme: {theme}</button>

      <button onClick={toggleHidden}>
        {showHidden ? "Hide" : "Show"} hidden content
      </button>

      {showHidden && (
        <div>
          <p>this content is hidden by default</p>
        </div>
      )}
    </div>
  );
}

export { App, lightTheme, darkTheme };
