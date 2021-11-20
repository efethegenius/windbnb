import "./App.css";
import { Windbnb } from "./Windbnb";
import Logo from "./files/logo.svg";
import { Footer } from "./Footer";
import { Link, animateScroll as scroll } from "react-scroll";

function App() {
  return (
    <div className="App">
      <img src={Logo} alt="logo" className="logo" />

      <Windbnb />
      <Footer />
    </div>
  );
}

export default App;
