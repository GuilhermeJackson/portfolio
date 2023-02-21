import Banner from "../component/Banner";
import Aos from "aos";
import "aos/dist/aos.css";
import About from "../component/About";
import Technology from "../component/Technology";
import Cat from "../component/Cat";
import Contact from "../component/Contact";
import Header from "../component/Header";

function App() {
  Aos.init({
    duration: 1500,
    delay: 400,
  });
  return (
    <div className="max-w-[1440px] mx-auto bg-page overflow-hidden relative ">
      {/* <Header/> */}
      <Banner />
      <About />
      <Cat />
      <Technology />
      <Contact />
    </div>
  );
}

export default App;
