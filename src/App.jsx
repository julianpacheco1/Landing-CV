import React from "react";
import NavBar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import ModalComp from "./commons/Modal";
import useTheme from "./hooks/useTheme";
import "./assets/app.css";

function App() {
  const [theme, setTheme] = useTheme();

  const themeLight = () => {
    setTheme("light");
  };

  const themeDark = () => {
    setTheme("dark");
  };

  return (
    <div className={theme}>
      <div className="mode">
        MODE
        <span className="emoji" onClick={themeLight}>🌞</span>
        <span className="emoji" onClick={themeDark}>🌙</span>
      </div>
      <NavBar />
      <ModalComp />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
