import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Body/Home/Home";
import About from "./Components/Body/About/About";
import Menu from "./Components/Body/Menu/Menu";
import Merch from "./Components/Body/Merch/Merch";
import Contact from "./Components/Body/Contact/Contact";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Menu />
      <Merch />
      <Contact />
    </div>
  );
}

export default App;
