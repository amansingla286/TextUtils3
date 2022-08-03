import { useState } from "react";
import "./App.css";
import Alert from "./compnents/Alert";
import About from './compnents/About';
import Navbar from "./compnents/Navbar";
import Textform from "./compnents/Textform";
import {  Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("dark mode has enabled", "success");
      document.title = "TextUtils -Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has enabled", "success");
      document.title = "TextUtils -Light Mode";
    }
  };
  const [alert, setAlert] = useState(null);

  const showAlert = (meassage, type) => {
    setAlert({
      msg: meassage,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      
        
      <Navbar mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <Switch>
        
          <Route path="/">
            <div className="container my-3">
              <Textform
                mode={mode}
                togglemode={togglemode}
                heading="Enter your text to analyse"
              />
            </div>
          </Route>
          <Route path="/About">
            <About />
          </Route>
          
        </Switch>
      
    </>
  );
}

export default App;
