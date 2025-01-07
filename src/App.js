import NavBar from "./components/NavBar"
import Main from "./components/Main"
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Events from "./components/Events"

function App() {
  return (
    <div>
      <NavBar />
      <Main />
      <About />
      <Portfolio />
      <Events />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
