import "./App.css";
import Navigation from "./components/Navigation";
import { Helmet } from "react-helmet";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Clients from "./components/Clients";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Helmet>
        {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&display=swap" /> */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        />
      </Helmet>
      <Navigation />
      <Home />
      <About />
      <Services />
      <Clients />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
